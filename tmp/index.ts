// import { useQuery } from 'react-query'
// import './styles.css'

// const endpoint = 'https://cc8d-195-182-22-229.ngrok-free.app/image-from-prompt'
// const prompt = '?=vector%20style%20cute%20black%20cat%20/2d'
// function generateEndpoint() {
//     const url = new URL(endpoint)
//     url.searchParams.set('prompt', 'Vector cartoon style 2d black cat')
//     console.log(url.toString());
//     return url.toString()

// }
// export const ImageRenderer = () => {

//     const { isLoading, error, data, refetch } = useQuery({
//         enabled: false,
//         queryKey: ['repoData'],

//         queryFn: () =>
//             fetch(generateEndpoint(), { method: "POST" })
//                 .then(response => {
//                     console.log(1)
//                     return response.blob()
//                 })
//                 .then(blob => {
//                     console.log(2)

//                     const url = URL.createObjectURL(blob);
//                     return url
//                 })

//     })


//     async function generateImage() {
//         console.log(0)
//         await refetch()
//         console.log(4)


//     }
//     return (
//         <div className= 'image-renderer' >
//         <h1>BEATIFUL WEBPAGE < /h1>
//     { isLoading && "Loading..." }
//     <img src={ data } alt = "" />
//         <button onClick={ generateImage }> GENERATE < /button>
//             < /div>
//     );
// };
