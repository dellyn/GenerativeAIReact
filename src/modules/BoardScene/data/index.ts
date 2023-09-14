import { SceneData } from './logic/types';

export const generateSceneTemplate = (index: number): SceneData => {
  return {
    images: [],
    image: undefined,
    description: '',
    fromScratch: true,
    index
  };
};

export const generateBoardTemplate = (): SceneData[] => {
  return [generateSceneTemplate(0),];
};
