import { Brief } from '#components/Brief';
import Script from '#components/Script';
import { BoardOverview } from '#modules/BoardScene/BoardOverview';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { convertScriptFromBrief, fetchImagesBasedOnFullScript } from './requests';
import { BoardData } from '#logic/types';
import './App.scss';

import { Header } from '#components/Header';

// const scriptData = [
//   " An animated map of Ukraine appears on the screen. Red lines start from one city and travel to another, representing package deliveries.",
//   " A courier dressed in a red uniform stands in front of a New Post branded delivery van. He smiles and holds a package.",
//   " The courier enters a customer's house and delivers the package with a smile. The customer stands by the door, looking pleased.",
//   " Inside a New Post sorting facility, workers in red uniforms are busy organizing and scanning packages. Conveyor belts and shelves are filled with packages. ",
//   " A close-up shot of a barcode being scanned on a package. The scanner beeps and the package is placed onto a conveyor belt.",
//   " A fleet of delivery vans drive through different cities and streets, with the New Post logo prominently displayed on the side of each vehicle.",
//   " A customer uses a New Post mobile app to track the location of their package. The screen shows the package moving from one city to another in real-time.",
//   " A stack of packages is loaded onto a New Post cargo plane. It takes off into the sky, leaving a trail of white clouds behind.",
//   " Inside a New Post warehouse, workers load packages onto a delivery drone. The drone takes off and flies away, delivering the package to a customer's backyard.",
//   " A customer receives a package and signs for it on a digital screen held by the courier. They both smile and exchange pleasantries.",
//   " The New Post logo appears on screen, with the tagline \"Delivering smiles across Ukraine\" underneath it. The screen fades to black."
// ]

const scriptData = [
  "A group of people sitting around a table in a conference room. They are discussing and gesturing. One person is holding a storyboard and pointing to it. They all look engaged and focused.",
  "A close - up of a creative director's face. They are looking at a computer screen, eyebrows raised in surprise and delight. The reflection of the screen lights up their face.",
  "An illustrator sitting at a desk, surrounded by sketchbooks and art supplies.They are drawing on a tablet with great concentration, creating detailed illustrations.",
]
const placeholder = `I want to create a video which will explain how our business work. We are delivery service which deliver packages across Ukraine.
Our company name is 'New Post'.Brand color is red.Please make an accent in illustrations to make illustrations in red, white,
  black tones.In this video I want to engage customers use our new service.post office which feature is that it can be placed in a
lot of places so user can get it's package in less that 100 meters from home instead of few kilometers to the nearest delivery
station.I want you to create a plot where user want to get the packages.Checks the nearest delivery station, checks the map but
it's too far. Then it see that on the map new post office located just near to him. User get the package in few minutes`

// const defaultData = generateBoardTemplate();
// const dummySceneData = {
//   description: "Some Description",
//   sceneId: 'sceneId1',
//   images: []
// }

function App() {
  const [brief, setBrief] = useState(placeholder);
  const [script, setScript] = useState(['']);
  const [voiceOver, setVoiceOver] = useState(['']);
  // const [sceneImages, setSceneImages] = useState([dummySceneData]);
  const [scenesArr, setScenesArr] = useState<BoardData>([]);
  const [fetching, setFetching] = useState({
    sceneId: true
  });


  const { isLoading, isFetching, data, refetch: generateScriptBasedOnBrief } = useQuery(
    ['repoData', { brief }],
    convertScriptFromBrief,
    {
      enabled: false,
    },
  );
  // const { isLoading: isFetchingImages, data: sceneImagesData, mutate: generateImagesBasedOnScript } = useMutation(fetchImagesBasedOnFullScript);

  function mapImagesToScenes(imageData) {
    setScenesArr(prevScenesArr => {
      return prevScenesArr.map((sceneData, index) => {
        if (sceneData.sceneId === imageData.sceneId) {
          return {
            description: imageData.description,
            ...imageData,
            images: [...sceneData.images, { img64: imageData.img64, id: imageData.id }],
          };
        }
        return sceneData;
      });
    });
  }

  async function generateImages() {
    console.log('generateImages', scenesArr);

    const mappedScenesPayload = scenesArr.map((scene, index) => {
      return [{
        description: scene.description,
        voiceOver: scene.voiceOver,
        scene_id: scene.sceneId,
        index,
        from_scratch: true,
        example_img_id: null
      }]
    })

    Promise.all(
      mappedScenesPayload.map(async (payload, index) => {
        setFetching((prevValue) => {
          return {
            ...prevValue,
            [payload[0].scene_id]: true,
          };
        });

        try {
          const data = await fetchImagesBasedOnFullScript(JSON.stringify(payload));
          mapImagesToScenes(data[0]);
        } catch (error) {
          console.error("Failed to fetch images for scene", payload[0].scene_id, error);
        } finally {
          setFetching((prevValue) => {
            return {
              ...prevValue,
              [payload[0].scene_id]: false,
            };
          });
        }
      })
    )

  }

  useEffect(() => {
    if (data?.description) {
      setScript(data.description)
      setVoiceOver(data.voiceOver)
    }
  }, [data]);



  return (
    <div className='app'>
      <Header />
      <div className="view">
        <section className="text-container">
          <Brief
            brief={brief}
            setBrief={setBrief}
            isLoading={isLoading || isFetching}
            generateScriptBasedOnBrief={generateScriptBasedOnBrief}
          />
          <Script
            script={script}
            isFetchingScript={isLoading || isFetching}
            generateImagesBasedOnScript={generateImages}
          />
          {/* <VoiceOver
            script={voiceOver}
            isFetchingScript={isLoading || isFetching}
            generateImagesBasedOnScript={runRequests}
          /> */}
        </section>
        <section className="board-container">
          <BoardOverview
            script={script}
            voiceOver={voiceOver}
            setScript={setScript}
            isFetchingScript={isLoading || isFetching}
            fetching={fetching}
            scenesArr={scenesArr}
            setScenesArr={setScenesArr}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
