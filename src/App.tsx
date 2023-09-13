import Script from '#components/Script';
import { BoardOverview } from '#modules/BoardScene/BoardOverview';
import './App.scss';

function App() {

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap');
      </style>
      <div className='app'>
        <h1>AI HOUSE</h1>
        <Script />
        <BoardOverview />
      </div>

    </>
  );
}

export default App;
