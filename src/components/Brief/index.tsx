
import classNames from 'classnames';
import { Button } from '#components/buttons/Button';
import { ChangeEvent } from 'react';
import { AutoResizingTextarea } from '#components/inputs/AutoResizingTextarea';
import './styles.scss'

export const Brief = ({ brief, setBrief, isLoading, setScript, generateScriptBasedOnBrief }) => {
    const containerClassName = classNames('script-container');
    function changeBrief({ target }: ChangeEvent<HTMLTextAreaElement>) {
        setBrief(target?.value)
    }

    function sendScript(params) {
        generateScriptBasedOnBrief({ queryKey: ['repoData', { brief }] });
    }


    return (
        <div className={containerClassName}>
            <h2>Brief</h2>
            {isLoading && 'Loading...'}
            <AutoResizingTextarea
                value={brief}
                onChange={changeBrief}
            />
            <Button className='generate-button' onClick={sendScript}>Generate Brief</Button>
        </div>
    );
};
