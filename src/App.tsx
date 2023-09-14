import { Brief } from '#components/Brief';
import Script from '#components/Script';
import { BoardOverview } from '#modules/BoardScene/BoardOverview';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { convertScriptFromBrief, fetchImagesBasedOnFullScript } from './requests';
import './App.scss';
import { BoardData } from '#logic/types';
import { generateBoardTemplate } from '../src/modules/BoardScene/data';



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
const placeholder = `I want to create a video which will explain how our business work. We are delivery service which deliver packages across Ukraine.
Our company name is 'New Post'.Brand color is red.Please make an accent in illustrations to make illustrations in red, white,
  black tones.In this video I want to engage customers use our new service.post office which feature is that it can be placed in a
lot of places so user can get it's package in less that 100 meters from home instead of few kilometers to the nearest delivery
station.I want you to create a plot where user want to get the packages.Checks the nearest delivery station, checks the map but
it's too far. Then it see that on the map new post office located just near to him. User get the package in few minutes`

const defaultData = generateBoardTemplate();
const dummySceneData = {
  description: "Some Description",
  sceneId: 'sceneId1',
  images: []
}

function App() {
  const [script, setScript] = useState([]);
  const [brief, setBrief] = useState(placeholder);
  const [images, setImages] = useState([dummySceneData]);
  const [scenesArr, setScenesArr] = useState<BoardData>(defaultData);


  const { isLoading, isFetching, data, refetch: generateScriptBasedOnBrief } = useQuery(
    ['repoData', { brief }],
    convertScriptFromBrief,
    {
      enabled: false,
    },
  );
  // const { isFetching: isFetchingImages, data: imagesData, refetch: generateImagesBasedOnScript } = useMutation(
  //   ['scenesImages', { scenesData: scenesArr }],
  //   fetchImagesBasedOnFullScript,
  //   {
  //     enabled: false,
  //   },
  // );


  async function generateImagesBasedOnScript() {
    await fetchImagesBasedOnFullScript(scenesArr)
  }

  useEffect(() => {
    setScript(data)
  }, [data]);

  return (
    <div className='app'>
      <h1>AI HOUSE</h1>
      <div className="view">
        <section className="text-container">
          <Brief
            brief={brief}
            setBrief={setBrief}
            setScript={setScript}
            isLoading={isLoading || isFetching}
            generateScriptBasedOnBrief={generateScriptBasedOnBrief}
          />
          <Script
            script={script}
            setScript={setScript}
            isFetchingScript={isLoading || isFetching}
            generateImagesBasedOnScript={generateImagesBasedOnScript}
          />
        </section>
        <section className="board-container">
          <BoardOverview
            script={script}
            setScript={setScript}
            isFetchingScript={isLoading || isFetching}
            isFetchingImages={false}
            scenesArr={scenesArr}
            setScenesArr={setScenesArr}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
