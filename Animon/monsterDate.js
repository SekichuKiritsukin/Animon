const MONSTER_DB = {
  "イヌ": {
    type1: "肉食", type2: null,
    hp: 30, attack: 8, defense: 5, speed: 5, exp: 12,
    image: "inu.png",
    skills: [
      { name: "ひっかく", power: 6, accuracy: 1.0, type: "肉食" },
      { name: "しっぽをふる", power: 0, accuracy: 1.0, buff: { target: "target", stat: "speed", factor: 0.5 }, type: null },
      { name: "ほえる", power: 0, accuracy: 1.0, buff: { target: "self", stat: "attack", factor: 1.5 }, type: null } // ← カンマがあってもなくてもOKですが、末尾は整理
    ],
    learnset: [
      { level: 4, skill: { name: "たいあたり", power: 8, accuracy: 1.0, type: "草食" } },
      { level: 9, skill: { name: "ほのお", power: 12, accuracy: 0.5, type: "肉食" } },
      { level: 20, skill: { name: "あああ", power: 12, accuracy: 1.0, requireSp: 5, type: "肉食" } } // ← ここに「}」が足りなかった
    ] // ← ここに「,」が足りなかった
  }, // イヌのデータ終わり
  "ネコ": {
    type1: "肉食", type2: null,
    hp: 25, attack: 10, defense: 3, speed: 7, exp: 12,
    image: "neko.png",
    skills: [
      { name: "ひっかく", power: 6, accuracy: 1.0, type: "肉食" },
      { name: "かみつく", power: 7, accuracy: 1.0, type: "肉食" }
    ],
    learnset: [
      { level: 4, skill: { name: "ネコパンチ", power: 12, accuracy: 1.0, type: "肉食" } }
    ]
  },
  "シマウマ": {
    type1: "草食", type2: null,
    hp: 35, attack: 7, defense: 6, speed: 6, exp: 20000,
    image: "shimauma.png",
    skills: [
      { name: "ふみつけ", power: 8, accuracy: 1.0, type: "草食" }
    ],
    learnset: [
      { level: 3, skill: { name: "ける", power: 5, accuracy: 1.0, type: "草食" } }
    ]
  }
};

