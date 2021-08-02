import './App.css';
import Cover1 from "../src/images/cover-3.jpg"
import ProfilePic from "../src/images/icon-1.jpg"

function App() {
  return (
    <body>
    <div className="App">
      <img class="wallpaper" src={Cover1} alt="Wallpaper"></img>s
      <img class="profilePic" src={ProfilePic} alt="Profile Pic"></img>
      <p class="name"><b>Tianyi Ma</b></p>
      <p class="intro">A senior Applied Math major at the University of Rochester, CS minor. You can usually find me solving algorithmic problems, developing softwares, writing, snapping photos and listening to podcasts and music.</p>
    </div>
    </body>
  );
}

export default App;
