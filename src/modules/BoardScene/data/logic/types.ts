// type StringDateISO = string

// back
interface RawSceneImageData {
    image: File
    id: string
}
interface RawSceneData {
    sceneId: string,
    description: string
    images: RawSceneImageData[]
}

// front
type SceneImageData = Omit<RawSceneImageData, 'image'>
interface SceneForm {
    description: string
    sceneId: string
}
export type SceneData = SceneForm & RawSceneData;
export type BoardPayload = SceneForm[]
export type BoardData = SceneData[]
