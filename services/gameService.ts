import { type Card, CardType, CardColor, Rarity, type Deck } from '../types';

const baseUrl = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '') + '/';
export const getCardImageUrl = (cardId: string) => `${baseUrl}assets/cards/${cardId}.png`;

export const ALL_CARDS: Card[] = [
  // Blue Cards
  { id: 'b001', name: 'ヤマトタケル', type: CardType.Monster, color: CardColor.Blue, cost: 6, rarity: Rarity.SR, ap: 600, hp: 500, text: '青x4 : 攻撃で怪魔を破壊したとき、メインデッキから1枚引いてよい。', imageUrl: getCardImageUrl('b001') },
  { id: 'b002', name: 'ヤマ', type: CardType.Monster, color: CardColor.Blue, cost: 4, rarity: Rarity.N, ap: 400, hp: 400, text: '', imageUrl: getCardImageUrl('b002') },
  { id: 'b003', name: '河童', type: CardType.Monster, color: CardColor.Blue, cost: 3, rarity: Rarity.N, ap: 300, hp: 300, text: '', imageUrl: getCardImageUrl('b003') },
  { id: 'b004', name: '鳧徯', type: CardType.Monster, color: CardColor.Blue, cost: 2, rarity: Rarity.N, ap: 200, hp: 200, text: '', imageUrl: getCardImageUrl('b004') },
  { id: 'b005', name: '儚き送り火', type: CardType.Spell, color: CardColor.Blue, cost: 3, rarity: Rarity.R, text: '【大怪魔】を持たない相手の怪魔を1つ選び、手札に戻す。', imageUrl: getCardImageUrl('b005') },
  { id: 'b006', name: '青鬼の爪', type: CardType.Attachment, color: CardColor.Blue, cost: 1, rarity: Rarity.N, text: 'これが付いている怪魔のAPを300増やす。', apModifier: 300, hpModifier: 0, imageUrl: getCardImageUrl('b006') },
  { id: 'b007', name: '大天狗', type: CardType.Monster, color: CardColor.Blue, cost: 7, rarity: Rarity.R, ap: 700, hp: 700, text: '【大怪魔】(中央レーンにしか置けない。相手の左右レーンの怪魔はプレイヤーに攻撃できない)\n【ダブルクラッシャー】(相手プレイヤーへの攻撃で2枚のウォールを破壊する)', imageUrl: getCardImageUrl('b007') },
  { id: 'b008', name: 'ハクタク', type: CardType.Monster, color: CardColor.Blue, cost: 3, rarity: Rarity.N, ap: 300, hp: 200, text: '登場時、メインデッキから1枚引いて手札を1枚捨てる。', imageUrl: getCardImageUrl('b008') },
  { id: 'b009', name: '烏天狗', type: CardType.Monster, color: CardColor.Blue, cost: 2, rarity: Rarity.R, ap: 100, hp: 100, text: '青x3 : 自分のターン終了時、これと、これに付いている付与を手札に戻してよい。', imageUrl: getCardImageUrl('b009') },
  { id: 'b010', name: 'アマビエ', type: CardType.Monster, color: CardColor.Blue, cost: 1, rarity: Rarity.N, ap: 200, hp: 200, text: '【ひるむ】(プレイヤーに攻撃できない)', imageUrl: getCardImageUrl('b010') },
  { id: 'b_magic', name: '青の魔力', type: CardType.Magic, color: CardColor.Blue, cost: 0, rarity: Rarity.N, text: '', imageUrl: getCardImageUrl('b_magic') },
  { id: 'b_magic_awakened', name: '青の覚醒魔力', type: CardType.Magic, color: CardColor.Blue, cost: 0, rarity: Rarity.R, text: '《覚醒魔力》ウォールゾーンから青のカードが自分の捨て札に置かれるとき、これをウラ向きにすることで、そのカードを捨て札に置く代わりに手札に加えてよい。そうしたら手札を1枚捨てる。(ウラ向きの魔力は色を持たない)', imageUrl: getCardImageUrl('b_magic_awakened') },

  // Green Cards
  { id: 'g001', name: 'アロサウルス', type: CardType.Monster, color: CardColor.Green, cost: 8, rarity: Rarity.SR, ap: 700, hp: 700, text: '【大怪魔】\n【ダブルクラッシャー】\n緑x4 : APとHPを200増やす。', imageUrl: getCardImageUrl('g001') },
  { id: 'g002', name: 'イグアノドン', type: CardType.Monster, color: CardColor.Green, cost: 4, rarity: Rarity.N, ap: 400, hp: 400, text: '', imageUrl: getCardImageUrl('g002') },
  { id: 'g003', name: 'プテラノドン', type: CardType.Monster, color: CardColor.Green, cost: 3, rarity: Rarity.N, ap: 300, hp: 300, text: '', imageUrl: getCardImageUrl('g003') },
  { id: 'g004', name: 'ディッキンソニア', type: CardType.Monster, color: CardColor.Green, cost: 2, rarity: Rarity.N, ap: 200, hp: 200, text: '', imageUrl: getCardImageUrl('g004') },
  { id: 'g005', name: '太古の脈動', type: CardType.Spell, color: CardColor.Green, cost: 2, rarity: Rarity.R, text: '魔力を1つ魔力ゾーンにダウン(ヨコ向き)で出す。', imageUrl: getCardImageUrl('g005') },
  { id: 'g006', name: '氷塊の籠手', type: CardType.Attachment, color: CardColor.Green, cost: 1, rarity: Rarity.N, text: '【消滅】これが付いている怪魔のAPとHPを200増やす。', apModifier: 200, hpModifier: 200, imageUrl: getCardImageUrl('g006') },
  { id: 'g007', name: 'サウロペルタ', type: CardType.Monster, color: CardColor.Green, cost: 5, rarity: Rarity.R, ap: 400, hp: 600, text: '', imageUrl: getCardImageUrl('g007') },
  { id: 'g008', name: 'スミロドン', type: CardType.Monster, color: CardColor.Green, cost: 4, rarity: Rarity.R, ap: 300, hp: 400, text: '左右レーンに登場時、ターン終了時までAPを200増やす。', imageUrl: getCardImageUrl('g008') },
  { id: 'g009', name: 'ギガンテウスオオツノジカ', type: CardType.Monster, color: CardColor.Green, cost: 3, rarity: Rarity.N, ap: 200, hp: 400, text: '', imageUrl: getCardImageUrl('g009') },
  { id: 'g010', name: 'トゥリモンストゥルム', type: CardType.Monster, color: CardColor.Green, cost: 1, rarity: Rarity.N, ap: 200, hp: 200, text: '【ひるむ】(プレイヤーに攻撃できない)', imageUrl: getCardImageUrl('g010') },
  { id: 'g_magic', name: '緑の魔力', type: CardType.Magic, color: CardColor.Green, cost: 0, rarity: Rarity.N, text: '', imageUrl: getCardImageUrl('g_magic') },
  { id: 'g_magic_awakened', name: '緑の覚醒魔力', type: CardType.Magic, color: CardColor.Green, cost: 0, rarity: Rarity.R, text: '《覚醒魔力》ウォールゾーンから緑のカードが自分の捨て札に置かれるとき、これをウラ向きにすることで、そのカードを捨て札に置く代わりに手札に加えてよい。そうしたら手札を1枚捨てる。(ウラ向きの魔力は色を持たない)', imageUrl: getCardImageUrl('g_magic_awakened') },

  // Red Cards
  { id: 'r001', name: 'ファイアードレイク', type: CardType.Monster, color: CardColor.Red, cost: 7, rarity: Rarity.SR, ap: 600, hp: 600, text: '【大怪魔】\n【ダブルクラッシャー】\n赤x4 : 登場時、相手の怪魔を1つ選び、300のダメージを与える。', imageUrl: getCardImageUrl('r001') },
  { id: 'r002', name: '巨人のトロール', type: CardType.Monster, color: CardColor.Red, cost: 5, rarity: Rarity.R, ap: 500, hp: 500, text: '', imageUrl: getCardImageUrl('r002') },
  { id: 'r003', name: 'ウェアウルフ', type: CardType.Monster, color: CardColor.Red, cost: 3, rarity: Rarity.N, ap: 300, hp: 300, text: '', imageUrl: getCardImageUrl('r003') },
  { id: 'r004', name: 'ゴブリン', type: CardType.Monster, color: CardColor.Red, cost: 2, rarity: Rarity.N, ap: 200, hp: 200, text: '', imageUrl: getCardImageUrl('r004') },
  { id: 'r005', name: '火炎の砲撃', type: CardType.Spell, color: CardColor.Red, cost: 2, rarity: Rarity.N, text: '相手の怪魔を1つ選び、300のダメージを与える。', imageUrl: getCardImageUrl('r005') },
  { id: 'r006', name: '闘竜の腕輪', type: CardType.Attachment, color: CardColor.Red, cost: 2, rarity: Rarity.R, text: 'これが付いている怪魔のAPとHPを300増やす。', apModifier: 300, hpModifier: 300, imageUrl: getCardImageUrl('r006') },
  { id: 'r007', name: 'フェニックス', type: CardType.Monster, color: CardColor.Red, cost: 3, rarity: Rarity.R, ap: 300, hp: 200, text: '攻撃で破壊されるとき、手札を1枚捨てることで、これを捨て札に置く代わりに手札に戻してよい。', imageUrl: getCardImageUrl('r007') },
  { id: 'r008', name: 'ミノタウロス', type: CardType.Monster, color: CardColor.Red, cost: 4, rarity: Rarity.N, ap: 500, hp: 300, text: '', imageUrl: getCardImageUrl('r008') },
  { id: 'r009', name: 'メデューサ', type: CardType.Monster, color: CardColor.Red, cost: 2, rarity: Rarity.R, ap: 300, hp: 100, text: '', imageUrl: getCardImageUrl('r009') },
  { id: 'r010', name: 'ピクシー', type: CardType.Monster, color: CardColor.Red, cost: 1, rarity: Rarity.N, ap: 200, hp: 200, text: '【ひるむ】(プレイヤーに攻撃できない)', imageUrl: getCardImageUrl('r010') },
  { id: 'r_magic', name: '赤の魔力', type: CardType.Magic, color: CardColor.Red, cost: 0, rarity: Rarity.N, text: '', imageUrl: getCardImageUrl('r_magic') },
  { id: 'r_magic_awakened', name: '赤の覚醒魔力', type: CardType.Magic, color: CardColor.Red, cost: 0, rarity: Rarity.R, text: '《覚醒魔力》ウォールゾーンから赤のカードが自分の捨て札に置かれるとき、これをウラ向きにすることで、そのカードを捨て札に置く代わりに手札に加えてよい。そうしたら手札を1枚捨てる。(ウラ向きの魔力は色を持たない)', imageUrl: getCardImageUrl('r_magic_awakened') },
];

export const STARTER_DECKS: Deck[] = [
    {
        name: 'deck_name_blue',
        mainDeck: ['b001', 'b001', 'b002', 'b002', 'b003', 'b003', 'b004', 'b004', 'b005', 'b005', 'b006', 'b006', 'b007', 'b007', 'b008', 'b008', 'b009', 'b009', 'b010', 'b010'],
        magicDeck: ['b_magic', 'b_magic', 'b_magic', 'b_magic', 'b_magic', 'b_magic', 'b_magic', 'b_magic', 'b_magic_awakened', 'b_magic_awakened'],
    },
    {
        name: 'deck_name_green',
        mainDeck: ['g001', 'g001', 'g002', 'g002', 'g003', 'g003', 'g004', 'g004', 'g005', 'g005', 'g006', 'g006', 'g007', 'g007', 'g008', 'g008', 'g009', 'g009', 'g010', 'g010'],
        magicDeck: ['g_magic', 'g_magic', 'g_magic', 'g_magic', 'g_magic', 'g_magic', 'g_magic', 'g_magic', 'g_magic_awakened', 'g_magic_awakened'],
    },
    {
        name: 'deck_name_red',
        mainDeck: ['r001', 'r001', 'r002', 'r002', 'r003', 'r003', 'r004', 'r004', 'r005', 'r005', 'r006', 'r006', 'r007', 'r007', 'r008', 'r008', 'r009', 'r009', 'r010', 'r010'],
        magicDeck: ['r_magic', 'r_magic', 'r_magic', 'r_magic', 'r_magic', 'r_magic', 'r_magic', 'r_magic', 'r_magic_awakened', 'r_magic_awakened'],
    },
];

export const DECK_RULES = {
    MAIN_DECK_SIZE: 20,
    MAGIC_DECK_SIZE: 10,
    MAX_COPIES: 2,
};

const CUSTOM_DECKS_STORAGE_KEY = 'senkai-sengi-custom-decks';

export const loadCustomDecks = (): Deck[] => {
    try {
        const decksJson = localStorage.getItem(CUSTOM_DECKS_STORAGE_KEY);
        return decksJson ? JSON.parse(decksJson) : [];
    } catch (error) {
        console.error("Failed to load custom decks:", error);
        return [];
    }
};

export const saveCustomDecks = (decks: Deck[]): void => {
    try {
        localStorage.setItem(CUSTOM_DECKS_STORAGE_KEY, JSON.stringify(decks));
    } catch (error) {
        console.error("Failed to save custom decks:", error);
    }
};


export const getCardById = (id: string): Card | undefined => ALL_CARDS.find(card => card.id === id);