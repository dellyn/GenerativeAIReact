
import classNames from 'classnames';
import './styles.scss'
import { AutoResizingTextarea } from '#components/inputs/AutoResizingTextarea';
import { Skeleton } from '#components/loaders/Skeleton';
import { Button } from '#components/buttons/Button';


const Script = ({ script = [], setScript, isFetchingScript,
    generateImagesBasedOnScript }) => {
    const containerClassName = classNames('script-container');
    console.log('script', script);
    // function changeScript({ target }) {
    //     const parsedString = script ? script.map((line, index) => `Scene ${index + 1}: ${line}`.trim())?.join('\n\n') : ''

    //     setScript(target.value)
    // }
    const parsedString = script ? script.map((line, index) => `Scene ${index + 1}: ${line}`.trim())?.join('\n\n') : ''
    return (
        <div className={containerClassName}>
            <h2>Script</h2>
            {isFetchingScript ? <Skeleton width={460} height={140} /> : (
                <AutoResizingTextarea className='script-textarea' value={parsedString} disabled />
            )}
            <Button className='generate-button' onClick={generateImagesBasedOnScript}>Generate Storybook</Button>
        </div >
    );
};
export default Script;
