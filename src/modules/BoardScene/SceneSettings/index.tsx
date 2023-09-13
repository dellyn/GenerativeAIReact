import classnames from 'classnames';
import './styles.scss';
import { IconButton } from '#components/buttons/IconButton';
import AddChapterIcon from '#icons/AddChapterIcon';
import { RefreshCircularIcon } from '#icons/RefreshCircularIcon';

export const SceneSettings = () => {
    const containerClassName = classnames('scene-settings');

    return (
        <div className={containerClassName}>
            <IconButton
                icon={<RefreshCircularIcon className='icon' />} />
        </div>
    );
};
