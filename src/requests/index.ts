const base = 'https://37c8-41-132-66-17.ngrok-free.app'

export const convertScriptFromBrief = async ({ queryKey }) => {
    const [_key, { brief }] = queryKey;
    const endpoint = `${base}/create-script/?brief=${brief}`


    const response = await fetch(endpoint, {
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

export const fetchImagesBasedOnFullScript = async (payload) => {
    const endpoint = `${base}/image-from-prompt/?prompts=${payload}`

    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: new Headers({
            'ngrok-skip-browser-warning': '69420',
        }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('res', data);
    return data;
}
export const fetchImageBasedOnDescription = async (sceneData) => {
}