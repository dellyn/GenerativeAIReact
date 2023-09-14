// type StringDateISO = string

// back
interface RawSceneImageData {
    image: File
    id: string
}
interface RawSceneData {
    images: RawSceneImageData[]
}

// front
type SceneImageData = Omit<RawSceneImageData, 'image'>
interface SceneForm {
    description: string
    fromScratch: boolean
    image?: SceneImageData
    index: number
}
export type SceneData = SceneForm & RawSceneData;
export type BoardPayload = SceneForm[]
export type BoardData = SceneData[]
