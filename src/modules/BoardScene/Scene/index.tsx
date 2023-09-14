import classnames from 'classnames';
import { image_base64 } from '#tmp/image.json';
import { TextAreaWithLabel } from '#components/inputs/TextAreaWithLabel';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';
import { IconButton } from '#components/buttons/IconButton';
import { RefreshCircularIcon } from '#icons/RefreshCircularIcon';
import './styles.scss';
import { Skeleton } from '#components/loaders/Skeleton';
import { fetchImageBasedOnDescription } from '../../../requests';
import { useState } from 'react';

export const Scene = ({ data,
  script,
  changeSceneDescription,
  addScene,
  sceneRef,
  scenes,
  index,
  isFetchingScript,
  isFetchingImages }) => {
  const containerClassName = classnames('scene');
  const [activeImageId, setActiveImageId] = useState(null);

  function regenerateImage() {
    fetchImageBasedOnDescription(scenes[index])

  }


  function renderThumbnails() {
    return [1, 2, 3, 4].map((image) => {
      return (
        <div className="image-thumbnail-container">
          <img src={`data:image/jpeg;base64,${image_base64}`}
            alt="image"
            className='image-thumbnail' />
        </div>
      )
    })
  }
  return (
    <>
      <div className={containerClassName}
        ref={sceneRef}
      >
        <div className="scene-number">
          Scene {index + 1}
        </div>
        <div className="image-container">
          <img src={`data:image/jpeg;base64,${image_base64}`}
            alt="image"
            className='image-preview' />
          <section className="images-thumbnails" >
            {renderThumbnails()}
          </section>
        </div>
        <div className="input-container">
          {isFetchingScript ? <Skeleton width={750} height={55} /> : (
            <>
              <TextAreaWithLabel
                labelProps={{ value: 'Description' }}
                inputProps={{ value: script ? script[index] : '', onChange: ({ target }) => changeSceneDescription(index, target.value) }} />
              <IconButton
                onClick={regenerateImage}
                icon={<RefreshCircularIcon className='icon' />} />
            </>
          )}
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
