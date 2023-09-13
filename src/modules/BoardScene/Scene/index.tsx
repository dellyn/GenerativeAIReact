/* eslint-disable camelcase */
import classnames from 'classnames';
import { image_base64 } from '#tmp/image.json';
import { TextAreaWithLabel } from '#components/inputs/TextAreaWithLabel';
import './styles.scss';
import { SceneSettings } from '../SceneSettings';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';

export const Scene = ({ data, changeBoardData, addScene, sceneRef, scenes, index }) => {
  const containerClassName = classnames('scene');

  function changeSceneDescription({ target }) {
    changeBoardData({
      ...data,
      description: target.value
    });
  }


  return (
    <>
      <div className={containerClassName}
        ref={sceneRef}
      >
        <div className="scene-number">
          Scene {index + 1}
        </div>
        <img src={`data:image/jpeg;base64,${image_base64}`}
          alt="image"
          className='image' />
        <SceneSettings />
        <div className="input-container">
          <TextAreaWithLabel
            labelProps={{ value: 'Description' }}
            inputProps={{ value: data.description, onChange: changeSceneDescription }} />
        </div>

      </div>
      {index + 1 < scenes.length && (
        <AddSceneButton
          onClick={() => addScene(index + 1)}
          className='add-scene-between-btn'
          icon={<AddChapterIcon className="icon" />}
        >Add scene
        </AddSceneButton>
      )}
    </>
  );
};
