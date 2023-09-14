
import classNames from 'classnames';
import { Button } from '#components/buttons/Button';
import { ChangeEvent, useEffect, useState } from 'react';
import { AutoResizingTextarea } from '#components/inputs/AutoResizingTextarea';
import './styles.scss'
import { useQuery } from 'react-query';
function generateEndpoint(brief) {
    return `https://d6da-41-132-66-17.ngrok-free.app/create-script/?brief=${brief}`
}

const placeholder = "I want to create a video which will explain how our business work. We are delivery service which deliver packages across Ukraine. Our company name is 'New Post'. Brand color is red. Please make an accent in illustrations to make illustrations in red, white, black tones. In this video I want to have a storytell how our delivery from door to door works"
export const Brief = ({ setScript }) => {
    const containerClassName = classNames('script-container');
    const [brief, setBrief] = useState(placeholder);
    function changeBrief({ target }: ChangeEvent<HTMLTextAreaElement>) {
        setBrief(target?.value)
    }


    const convertScriptFromBrief = async () => {
        const response = await fetch(generateEndpoint(brief), {
            method: 'GET',
            headers: new Headers({
                'ngrok-skip-browser-warning': '69420',
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log(1, { response });
        return data;
    }
    const { isLoading, error, data, refetch } = useQuery('repoData', convertScriptFromBrief, {
        enabled: false,
    });



    function sendScript(params) {
        refetch()
    }
    console.log({ data });
    useEffect(() => {
        setScript(data)
    }, [data]);

    return (
        <div className={containerClassName}>
            <h2>Brief</h2>
            {isLoading && 'Loading...'}
            <AutoResizingTextarea
                value={brief}
                onChange={changeBrief}
                placeholder={placeholder} />
            <Button className='generate-button' onClick={sendScript}>Generate</Button>
        </div>
    );
};
