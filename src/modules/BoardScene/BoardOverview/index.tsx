import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { BoardData } from '#logic/types';
import { generateBoardTemplate, generateSceneTemplate } from '#modules/BoardScene/data';
import { Scene } from '../Scene';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';
import './styles.scss';

const defaultData = generateBoardTemplate();

export const BoardOverview = ({ script, setScript }) => {
  const containerClassName = classnames('board');
  const [scenesArr, setScenesArr] = useState<BoardData>(defaultData);
  const scenesRef = useRef([])

  function addScene(index) {
    setScenesArr([...scenesArr, generateSceneTemplate(index)])
  }

  function changeSceneDescription(sceneIndex, updatedDescription) {
    const updatedScript = script.map((description, index) => {
      if (index === sceneIndex) {
        return updatedDescription
      }
      return description
    })
    setScript(updatedScript)
  }

  useEffect(() => {
    if (script?.length && scenesArr?.length !== script?.length) {

      setScenesArr(script.map((line, index) => {
        const currentScene = scenesArr[index]
        return currentScene ? currentScene : generateSceneTemplate(index)
      }))
    }

  }, [script?.length]);



  return (
    <>
      <div className={containerClassName}>
        Board Overview
        <div className="board-scenes horizontal">
          {scenesArr.map((sceneData, index) => <Scene
            addScene={addScene}
            data={sceneData}
            changeSceneDescription={changeSceneDescription}
            sceneRef={scenesRef?.current[sceneData.index]}
            scenes={scenesArr}
            index={index}
            script={script}
          />)}
        </div>
      </div >
      <AddSceneButton
        onClick={() => addScene(scenesArr.length + 1)}
        className='add-scene-between-btn'
        icon={<AddChapterIcon className="icon" />}
      >Add scene
      </AddSceneButton>
    </>
  );
};
