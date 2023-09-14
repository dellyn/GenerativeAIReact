import classnames from 'classnames';
import { useEffect, useRef, } from 'react';
import { generateSceneTemplate } from '#modules/BoardScene/data';
import { Scene } from '../Scene';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';
import { SceneSceleton } from '../Scene/SceneSceleton';
import './styles.scss';

export const BoardOverview = ({ script, voiceOver, setScript, scenesArr,
  setScenesArr, isFetchingScript, fetching }) => {
  const containerClassName = classnames('board');
  const scenesRef = useRef([])

  function addScene(index) {
    setScenesArr([...scenesArr, generateSceneTemplate(index, script, voiceOver)])
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

  function assignDescriptionToScenes() {
    if (script?.length && voiceOver?.length) {
      if (scenesArr.length < script.length) {
        const scenesArrWithScript = script.map((description, index) => {
          const currentScene = scenesArr[index]
          return currentScene?.description ? currentScene : generateSceneTemplate(index, script, voiceOver)

        })
        setScenesArr(scenesArrWithScript)

      }
    }
  }
  useEffect(() => {
    assignDescriptionToScenes()
  }, [scenesArr.length, script.length, voiceOver.length]);

  console.log('BoardOverview', scenesArr);

  return (
    <>
      <div className={containerClassName}>
        <h2>Storyboard</h2>
        <div className="board-scenes horizontal">
          {scenesArr.map((sceneData, index) => <Scene
            key={sceneData.id}
            addScene={addScene}
            sceneData={sceneData}
            changeSceneDescription={changeSceneDescription}
            sceneRef={scenesRef?.current[sceneData.index]}
            scenes={scenesArr}
            index={index}
            isFetchingScript={isFetchingScript}
            isFetchingImages={fetching[sceneData.sceneId]}
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
