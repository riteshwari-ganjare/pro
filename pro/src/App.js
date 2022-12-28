
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className='app-videos'>
      <Video
      url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
      channel="ActionReplay"
      description="Macbook air to new windows editing beast"
      song="i am a windows PC"
      likes={239}
      shares={345}
      messages={890}
      />
      <Video
      url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
      channel="TechKnowledge"
      description="tuesday morning editing on kdenlive in windows"
      song="kidenlive is greate"
      likes={390}
      shares={355}
      messages={990}
      />

      </div>
    
    </div>
  );
}

export default App;
