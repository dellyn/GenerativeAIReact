
import classNames from 'classnames';
import './styles.scss'
import { AutoResizingTextarea } from '#components/inputs/AutoResizingTextarea';
import { Skeleton } from '#components/loaders/Skeleton';
import { Button } from '#components/buttons/Button';

export const VoiceOver = ({ script, isFetchingScript,
    generateImagesBasedOnScript }) => {
    const containerClassName = classNames('voice-over-container');
    const parsedString = script ? script.map((line, index) => `Scene ${index + 1}: ${line}`.trim())?.join('\n\n') : ''


    return (
        <div className={containerClassName}>
            <h2>Voice Over</h2>
            {isFetchingScript ? <Skeleton width={460} height={140} /> : (
                <AutoResizingTextarea className='script-textarea' value={parsedString} disabled onChange={() => { }} />
            )}
        </div >
    );
};
