import type { Game } from '../types/game';

export const games: Game[] = [
  {
    id: 1,
    title: "スライムストライカー",
    description: "スペースで攻撃！りんごを取ると回復でき、色んな色のりんごがあって、それぞれのりんごに特殊能力があるよ。いろんなりんごを取って、エイリアンを倒していこう！",
    thumbnail: "",
    gameUrl: "https://slime-striker.ariori.link",
    tags: ["アクション", "シューティング", "2D"],
    releaseDate: "2024-10-17",
  },
  {
    id: 2,
    title: "超弾幕シューティング",
    description: "たくさんの弾幕を避けながら敵を倒し、ボスを次々と倒していくシューティングゲームです！",
    thumbnail: "",
    gameUrl: "https://hyper-shooting.ariori.link",
    tags: ["シューティング", "弾幕", "2D"],
    releaseDate: "2024-10-17",
  },
];
