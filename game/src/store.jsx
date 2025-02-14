import { kanas } from "./constants";

export const generateGameLevel = ({ nbStages }) => {
  const level = [];

  for (let i = 0; i < nbStages; i++) {
    const stage = [];
    const nbOptions = 3 + 1;
    for (let j = 0; j < nbOptions; ++j) {
      let kana = null;
      while (!kana || stage.includes(kana)) {
        kana = kanas[Math.floor(Math.random() * kanas.length)];
      }
      stage.push(kana);
    }

    stage[Math.floor(Math.random() * stage.length)].correct = true;
    level.push(stage);
  }
  return level;
};
