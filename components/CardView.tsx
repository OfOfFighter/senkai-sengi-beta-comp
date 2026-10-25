import React, { useState } from 'react';
import type { Card, InPlayCard } from '../types';
import { CardColor, CardType } from '../types';
import { useLocalization } from '../contexts/LocalizationContext';

interface CardViewProps {
  card: Card | InPlayCard;
  isSelected?: boolean;
  isTapped?: boolean;
  damage?: number;
  onClick?: () => void;
  className?: string;
  isAttackableTarget?: boolean;
  isAttachableTarget?: boolean;
  totalAp?: number;
  totalHp?: number;
  size?: 'normal' | 'small' | 'large';
}

const colorStyles: { [key in CardColor]: { bg: string; border: string; glow: string } } = {
  [CardColor.Red]: { bg: 'bg-red-950/80', border: 'border-red-500', glow: 'shadow-red-500/30' },
  [CardColor.Green]: { bg: 'bg-green-950/80', border: 'border-green-500', glow: 'shadow-green-500/30' },
  [CardColor.Blue]: { bg: 'bg-blue-950/80', border: 'border-blue-500', glow: 'shadow-blue-500/30' },
  [CardColor.Colorless]: { bg: 'bg-gray-800/80', border: 'border-gray-400', glow: 'shadow-gray-400/30' },
};

export const CardView: React.FC<CardViewProps> = ({
  card,
  isSelected,
  isTapped,
  damage,
  onClick,
  className,
  isAttackableTarget,
  isAttachableTarget,
  totalAp,
  totalHp,
  size = 'normal',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const styles = colorStyles[card.color] || colorStyles.Colorless;

  const sizeConfig = {
    normal: {
      container: 'w-36 h-52',
      nameText: 'text-sm',
      costBubble: 'w-6 h-6 text-sm',
      statsText: 'text-xs',
      damageBubble: 'w-9 h-9 text-lg',
      typeText: 'text-xs',
    },
    small: {
      container: 'w-28 h-40',
      nameText: 'text-xs',
      costBubble: 'w-5 h-5 text-xs',
      statsText: 'text-[10px]',
      damageBubble: 'w-7 h-7 text-base',
      typeText: 'text-[10px]',
    },
    large: {
      container: 'w-56 h-80',
      nameText: 'text-base',
      costBubble: 'w-8 h-8 text-base',
      statsText: 'text-sm',
      damageBubble: 'w-12 h-12 text-2xl',
      typeText: 'text-sm',
    },
  };

  const s = sizeConfig[size] || sizeConfig.normal;

  const finalAp = totalAp ?? card.ap;
  const apIsBoosted = typeof finalAp === 'number' && typeof card.ap === 'number' && finalAp > card.ap;
  const finalHp = totalHp ?? card.hp;
  const hpIsBoosted = typeof finalHp === 'number' && typeof card.hp === 'number' && finalHp > card.hp;
  const remainingHp = typeof finalHp === 'number' ? Math.max(0, finalHp - (damage || 0)) : undefined;

  const cardClasses = `
    ${s.container} rounded-lg flex flex-col justify-between text-white shadow-md
    border-2 ${styles.border} ${styles.glow} overflow-hidden
    transform transition-all duration-300 relative select-none
    ${isSelected ? 'scale-105 ring-4 ring-yellow-400 shadow-xl shadow-yellow-400/50 z-20' : 'hover:scale-105'}
    ${isAttackableTarget ? 'ring-4 ring-red-500 shadow-lg shadow-red-500/50 animate-pulse' : ''}
    ${isAttachableTarget ? 'ring-4 ring-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse' : ''}
    ${isTapped ? 'rotate-90' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className || ''}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      {/* 本物のカード画像 */}
      {card.imageUrl && !imageError ? (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={card.imageUrl}
            alt={card.name}
            className={`w-full h-full object-cover transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {/* 画像読み込み中のプレースホルダー */}
          {!imageLoaded && (
            <div className={`w-full h-full ${styles.bg} flex items-center justify-center p-2`}>
              <span className="text-xs text-slate-300 font-bold truncate">{card.name}</span>
            </div>
          )}
        </div>
      ) : (
        /* 画像読み込み失敗時のフォールバック表示 */
        <div className={`w-full h-full ${styles.bg} flex flex-col justify-between p-2`}>
          <div className={`flex justify-between items-start ${s.nameText}`}>
            <span className="font-bold truncate" title={card.name}>{card.name}</span>
            <span className={`${s.costBubble} flex items-center justify-center rounded-full font-bold text-black bg-yellow-300 border border-white`}>
              {card.cost}
            </span>
          </div>
          <div className="flex-grow flex items-center justify-center text-center text-xs text-slate-300 px-1">
            {card.text || card.name}
          </div>
        </div>
      )}

      {/* ゲームプレイ用の動的オーバーレイ（バフ・ダメージ・変動ステータス） */}
      {card.type === CardType.Monster && 'ap' in card && 'hp' in card && (
        <div className="absolute bottom-1 inset-x-1 flex justify-between items-end pointer-events-none z-10 font-bold">
          {/* AP表示（バフ時は強調、通常時も盤面視認性のため小さくバッジ表示） */}
          <span
            className={`px-1.5 py-0.5 rounded shadow text-white font-mono ${s.statsText} ${
              apIsBoosted
                ? 'bg-orange-600 ring-2 ring-yellow-300 text-yellow-100 font-extrabold animate-pulse'
                : 'bg-black/70 border border-slate-600 text-slate-200'
            }`}
          >
            {apIsBoosted ? `AP ${finalAp}` : finalAp}
          </span>

          {/* HP表示（バフ時またはダメージ時は強調、通常時もコンパクト表示） */}
          <span
            className={`px-1.5 py-0.5 rounded shadow text-white font-mono ${s.statsText} ${
              damage && damage > 0
                ? 'bg-red-700 ring-2 ring-red-400 text-white font-extrabold'
                : hpIsBoosted
                ? 'bg-green-700 ring-2 ring-yellow-300 text-yellow-100 font-extrabold animate-pulse'
                : 'bg-black/70 border border-slate-600 text-slate-200'
            }`}
            title={damage && damage > 0 ? `HP: ${remainingHp} / ${finalHp}` : `HP: ${finalHp}`}
          >
            {damage && damage > 0 ? `${remainingHp}/${finalHp}` : hpIsBoosted ? `HP ${finalHp}` : finalHp}
          </span>
        </div>
      )}

      {/* ダメージバブル（ダメージを受けているときに中央に大きく表示） */}
      {damage !== undefined && damage > 0 && (
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 text-white rounded-full ${s.damageBubble} flex items-center justify-center font-extrabold border-2 border-white shadow-xl z-20 animate-pulse pointer-events-none`}
        >
          -{damage}
        </span>
      )}

      {/* 付与カードの効果バッジ */}
      {card.type === CardType.Attachment && (card.apModifier !== 0 || card.hpModifier !== 0) && (
        <div className="absolute bottom-1 inset-x-1 text-center pointer-events-none z-10">
          <span className={`inline-block px-1.5 py-0.5 rounded bg-black/80 border border-cyan-400 text-cyan-200 font-bold ${s.statsText}`}>
            {card.apModifier !== 0 && `AP+${card.apModifier} `}
            {card.hpModifier !== 0 && `HP+${card.hpModifier}`}
          </span>
        </div>
      )}
    </div>
  );
};

export const CardBack: React.FC<{ type: 'main' | 'magic'; count: number; className?: string; size?: 'normal' | 'small' | 'large' }> = ({
  type,
  count,
  className,
  size = 'normal',
}) => {
  const { t } = useLocalization();
  const color = type === 'main' ? 'border-yellow-500' : 'border-purple-500';
  const label = type === 'main' ? t('deck') : t('magic');

  const sizeClasses =
    size === 'small' ? 'w-28 h-40' : size === 'large' ? 'w-56 h-80' : 'w-36 h-52';

  return (
    <div
      className={`${sizeClasses} rounded-lg p-2 flex flex-col justify-between items-center text-white shadow-lg border-2 ${color} bg-slate-800 relative select-none ${className || ''}`}
    >
      <h4 className="font-bold text-lg">{label}</h4>
      <div className="flex-grow flex items-center justify-center">
        <span className="text-6xl font-bold text-slate-400/50 select-none">{count}</span>
      </div>
      <div className="h-4"></div>
    </div>
  );
};
