import classnames from 'classnames';
import { image_base64 } from '#tmp/image.json';
import { TextAreaWithLabel } from '#components/inputs/TextAreaWithLabel';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';
import { IconButton } from '#components/buttons/IconButton';
import { RefreshCircularIcon } from '#icons/RefreshCircularIcon';
import './styles.scss';

export const Scene = ({ data,
  script,
  changeSceneDescription,
  addScene, sceneRef, scenes, index }) => {
  const containerClassName = classnames('scene');

  return (
    <>
      <div className={containerClassName}
        ref={sceneRef}
      >
        {/* <SceneSceleton /> */}
        <div className="scene-number">
          Scene {index + 1}
        </div>
        <img src={`data:image/jpeg;base64,${image_base64}`}
          alt="image"
          className='image' />
        {/* <SceneSettings /> */}
        <div className="input-container">
          <TextAreaWithLabel
            labelProps={{ value: 'Description' }}
            inputProps={{ value: script ? script[index] : '', onChange: ({ target }) => changeSceneDescription(index, target.value) }} />
          <IconButton
            icon={<RefreshCircularIcon className='icon' />} />
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
