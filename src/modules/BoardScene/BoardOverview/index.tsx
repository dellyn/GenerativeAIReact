import classnames from 'classnames';
import { useRef, useState } from 'react';
import { BoardData, SceneData } from '#logic/types';
import { generateBoardTemplate, generateSceneTemplate } from '#data';
import { Scene } from '../Scene';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';
import './styles.scss';

const defaultData = generateBoardTemplate();

export const BoardOverview = () => {
  const containerClassName = classnames('board');
  const [boardData, setBoardData] = useState<BoardData>(defaultData);
  const scenesRef = useRef([])

  function changeBoardData(updatedScene: SceneData) {
    setBoardData(boardData.map((scene) => {
      if (scene.index === updatedScene.index) {
        return updatedScene
      }
      return scene
    }));
  }
  function addScene(index) {
    setBoardData([...boardData, generateSceneTemplate(index)])
    // setTimeout(() => {
    //   window.scrollTo(0, 99999)
    // })
  }

  return (
    <>
      <div className={containerClassName}>
        Board Overview
        <div className="board-scenes horizontal">
          {boardData.map((sceneData, index) => <Scene
            addScene={addScene}
            data={sceneData}
            changeBoardData={changeBoardData}
            sceneRef={scenesRef?.current[sceneData.index]}
            scenes={boardData}
            index={index}
          />)}
        </div>

      </div >
      <AddSceneButton
        onClick={() => addScene(boardData.length + 1)}
        className='add-scene-between-btn'
        icon={<AddChapterIcon className="icon" />}
      >Add scene
      </AddSceneButton>
    </>
  );
};
