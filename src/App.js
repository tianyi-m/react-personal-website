import './App.css';
import Cover1 from "../src/images/cover-3.jpg"
import ProfilePic from "../src/images/icon-1.jpg"
import githubIcon from "../src/images/github-icon.png"
import mediumIcon from "../src/images/medium-icon.png"
import doubanIcon from "../src/images/douban-icon.png"
import instagramIcon from "../src/images/instagram-icon.png"
import codeIcon from "../src/images/code-icon.png"
import photoIcon from "../src/images/photo-icon.png"

function App() {
  return (
    <body>
    <div className="App">
      <img class="wallpaper" src={Cover1} alt="Wallpaper"></img>
      <img class="profilePic" src={ProfilePic} alt="Profile Pic"></img>
      <div class="nameAndContacts">
        <p class="name"><b>Tianyi Ma</b></p>
        <div class="icons-box">
            <div class="icons">
                <a href="https://github.com/tianyi-m">
                    <img src={githubIcon} alt="Icon"/>
                </a>
            </div>
            <div class="seperator"></div>
            <div class="icons">
                <a href="https://www.instagram.com/sotlamb/">
                    <img src={instagramIcon} alt="Icon"/>
                </a>
            </div>
            <div class="seperator"></div>
            <div class="icons">
                <a href="https://medium.com/@tma8">
                    <img src={mediumIcon} alt="Icon"/>
                </a>
            </div>
            <div class="seperator"></div>
            <div class="icons">
                <a href="https://www.douban.com/people/243284156/">
                    <img src={doubanIcon} alt="Icon"/>
                </a>
            </div>
        </div>
      </div>
      <p class="intro">A senior Applied Math major at the University of Rochester, CS minor. You can usually find me solving algorithmic problems, developing softwares, writing, snapping photos and swimming. 
      Click on the Instagram and Medium Icon to find my photos and blogs!  
      <br/>Email: tma8@u.rochester.edu
      </p>
      <div class="body">
        <div class="category">
          <div class="categoryIcons">
            <img class="categoryIcons" src={codeIcon} alt="Icon"/>
          </div>
          <div class="categoryName">
            <p class="texts">Coding Projects</p>
          </div>
        </div>
        <div class="content">
          <p class="texts"><b><a href="https://github.com/tianyi-m/contests">Codeforces Online Competitions and Practices (July 2021) (All titles is clickable)</a></b>
            <br/>• In Python, attended a few weekly algorithmic competitions and solved algorithmic problems online using number theory, dynamic programming, and greedy algorithm, and more.
            <br/><br/><b><a href="https://github.com/sufian27/Hidden-Markov-Model">ML HHM, Neural Networks and MLP (April 2021)</a></b>
            <br/>• Using python, built a simple Multilayer Perceptron, a two-layer Neural Network and a Hidden Markov Model from scratch. Trained the models on 5 different dateset and achieved 100%, 97%, 94%, 99$, 76% accuracy respectively. Wrote simple prediction and Viterbi prediction methods to predict the next word for a sentence for the Hidden Markov Model.
            <br/><br/><b><a href="https://github.com/tianyi-m/music-fft-visualizer">Music FFT Visualizer (March 2021)</a></b>
            <br/>• Using Django, MySQL and JavaScript, implemented a web browser music player that visualize the song by its amplitude using the Hanning function and by its frequency domain through applying Short-Term Fourier Transform to its signal data. 
            <br/><br/><b><a href="https://github.com/tianyi-m/Conway-s-Game-of-Life">Conway’s Game of Life (March 2021)</a></b>
            <br/>• In JavaScript, HTML and CSS, built a web browser game based on Conway’s Game of Life. (Download the repo and click on conwayGameOfLife.html to start playing)
            <br/><br/><b><a href="https://github.com/tianyi-m/ProjectAUX">ProjectAUX (Oct 2020)</a></b>
            <br/>• In React Expo, developed an app that allow people to listen to music together with friends from anywhere.</p>
        </div>
      </div>
      <div class="body">
        <div class="category">
          <div class="categoryIcons">
            <img class="categoryIcons" src={photoIcon} alt="Icon"/>
          </div>
          <div class="categoryName">
            <p class="texts">Photo Gallery</p>
          </div>
        </div>
        <div class="content">
          <p class="texts">TBD</p>
        </div>
      </div>
    </div>
    </body>
  );
}

export default App;
