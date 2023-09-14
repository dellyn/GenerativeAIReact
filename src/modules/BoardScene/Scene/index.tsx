import classnames from 'classnames';
import { TextAreaWithLabel } from '#components/inputs/TextAreaWithLabel';
import AddChapterIcon from '#icons/AddChapterIcon';
import { AddSceneButton } from '#components/AddSceneButton';
import { IconButton } from '#components/buttons/IconButton';
import { RefreshCircularIcon } from '#icons/RefreshCircularIcon';
import { Skeleton } from '#components/loaders/Skeleton';
import { fetchImageBasedOnDescription } from '../../../requests';
import { useEffect, useState } from 'react';
import './styles.scss';
import { ImageThin } from '#icons/ImageThin';

export const Scene = ({
  sceneData,
  script,
  changeSceneDescription,
  addScene,
  sceneRef,
  scenes,
  index,
  isFetchingScript,
  isFetchingImages
}) => {
  const containerClassName = classnames('scene');
  const [activeImage, setActiveImage] = useState(null);
  console.log({ sceneData });

  function regenerateImage() {
    fetchImageBasedOnDescription(scenes[index])
  }

  function changeActiveImage(image) {
    setActiveImage(image)
  }

  useEffect(() => {
    if (!activeImage) {
      setActiveImage(sceneData.images[0])
    }

  }, [sceneData]);


  function renderThumbnails() {
    return sceneData.images.map((image) => {
      if (!image) return null
      return (
        <div
          className={`image-thumbnail-container ${image.id === activeImage?.id}`}
          onClick={() => changeActiveImage(image)}>
          <img src={`data:image/jpeg;base64,${image.img64}`}
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
          {activeImage?.img64 ? (
            <img src={`data:image/jpeg;base64,${activeImage?.img64}`}
              alt="image"
              className='image-preview' />
          ) : (
            <> {isFetchingImages ? <Skeleton width={360} height={360} /> : <div className="image-preview placeholder"><ImageThin className='icon' /></div>}</>
          )}
          <section className="images-thumbnails" >
            {renderThumbnails()}
            {isFetchingImages && (
              <div className="image-thumbnail-container">
                <Skeleton width={83} height={83} />
              </div>
            )}
          </section>
        </div>
        <div className="input-container">
          {isFetchingScript ? <Skeleton width={750} height={55} /> : (
            <>
              <TextAreaWithLabel
                labelProps={{ value: 'Description' }}
                inputProps={{
                  disabled: true,
                  value: sceneData.description,
                  onChange: ({ target }) => changeSceneDescription(index, target.value)
                }} />
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
