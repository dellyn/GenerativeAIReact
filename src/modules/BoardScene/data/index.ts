import { v4 } from 'uuid';
import { SceneData } from './logic/types';

export const generateSceneTemplate = (index: number, script = [], voiceOver = []): SceneData => {
  return {
    images: [],
    description: script[index],
    sceneId: v4(),
    voiceOver: voiceOver[index]
  };
};

// export const generateBoardTemplate = (): SceneData[] => {
//   return [generateSceneTemplate(0),];
// };
