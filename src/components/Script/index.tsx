
import classNames from 'classnames';
import './styles.scss'
import { AutoResizingTextarea } from '#components/inputs/AutoResizingTextarea';


const Script = ({ script = [], setScript }) => {
    const containerClassName = classNames('script-container');
    console.log('script', script);

    const parsedString = script ? script.map((line, index) => `Scene ${index + 1}: ${line}`.trim())?.join('\n\n') : ''
    return (
        <div className={containerClassName}>
            <h2>Script</h2>
            <AutoResizingTextarea value={parsedString} />
        </div>
    );
};
export default Script;
