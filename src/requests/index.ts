const base = 'https://fde1-194-44-160-146.ngrok-free.app'
const dummySceneData = {
    description: "Some Description",
    scene_id: 'sceneId1',
    from_scratch: true,
    example_img_id: null
}

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

export const fetchImagesBasedOnFullScript = async (scenesData) => {
    const payload = [dummySceneData, dummySceneData]
    const adaptSceneData =
        console.log(JSON.stringify(payload))
    const endpoint = `${base}/image-from-prompt`


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
    console.log(1, { response });
    return data;
}
export const fetchImageBasedOnDescription = async (sceneData) => {
    const payload = JSON.stringify([dummySceneData])
    const endpoint = `${base}/image-from-prompt/?prompts=${payload}`


    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify([payload]),
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