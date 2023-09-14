import classnames from 'classnames';
import { useEffect, useRef, } from 'react';
import { generateSceneTemplate } from '#modules/BoardScene/data';
import { Scene } from '../Scene';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';
import { SceneSceleton } from '../Scene/SceneSceleton';
import './styles.scss';

export const BoardOverview = ({ script, setScript, scenesArr,
  setScenesArr, isFetchingImages, isFetchingScript = true }) => {
  const containerClassName = classnames('board');
  const scenesRef = useRef([])

  function addScene(index) {
    setScenesArr([...scenesArr, generateSceneTemplate(index, script)])
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
      console.log('GENERATE SCENE TEMPLATE');

      setScenesArr(script.map((description, index) => {
        const currentScene = scenesArr[index]
        return currentScene ? currentScene : generateSceneTemplate(index, script)

      }))
    }

  }, [script?.length]);

  console.log('BoardOverview', scenesArr);

  return (
    <>
      <div className={containerClassName}>
        <h2>Storyboard</h2>
        <div className="board-scenes horizontal">
          {scenesArr.map((sceneData, index) => <Scene
            key={sceneData.id}
            addScene={addScene}
            sceneData={{
              ...sceneData,
              description: sceneData.desciption || script[index]
            }}
            changeSceneDescription={changeSceneDescription}
            sceneRef={scenesRef?.current[sceneData.index]}
            scenes={scenesArr}
            index={index}
            script={script}
            isFetchingScript={isFetchingScript}
            isFetchingImages={isFetchingImages}
          />)}
          {isFetchingScript && scenesArr.length === 1 && (
            <>
              <SceneSceleton />
              <SceneSceleton />
            </>
          )}
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
