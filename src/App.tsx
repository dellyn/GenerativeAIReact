import { Brief } from '#components/Brief';
import Script from '#components/Script';
import { BoardOverview } from '#modules/BoardScene/BoardOverview';
import { useState } from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';



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
function App() {
  const [script, setScript] = useState([]);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
      <div className='app'>
        <h1>AI HOUSE</h1>
        <div className="view">
          <section className="text-container">
            <Brief
              setScript={setScript}
            />
            <Script
              script={script}
              setScript={setScript}
            />
          </section>
          <section className="board-container">
            <BoardOverview script={script} setScript={setScript} />
          </section>
        </div>
      </div>
    </QueryClientProvider >
  );
}

export default App;
