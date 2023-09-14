import classnames from 'classnames';
import { Skeleton } from '#components/loaders/Skeleton';
import './styles.scss'
export const SceneSceleton = () => {

    const containerClassName = classnames('scene-sceleton');

    return (
        <div className={containerClassName}>
            <div className="scene-number">
                <Skeleton width={80} height={27} />
            </div>
            <div className="image-container">
                <Skeleton width={350} height={350} />
            </div>
            <div className="input-container">
                <div className="label">
                    <Skeleton width={100} height={17} />
                </div>
                <Skeleton width={750} height={50} />
            </div>
        </div >
    );
};
