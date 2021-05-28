import './style.css';
import naruto from './imageInSrc.jpg';
import myVideo from './myVideo.mp4'

function App() {
  return (
    <>
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
      <h1 className="title red">Najeh Rahali</h1>
      <br></br>
      <img src={naruto} alt="naruto"/>
      <br></br>
      <img src="/imageInPublic.png" alt="kakashi"/>
    </div>

    <video style={{width:320, height:240}} controls>
      <source src={myVideo} type="video/mp4" />
    </video>
    </>
  );
}

export default App;
