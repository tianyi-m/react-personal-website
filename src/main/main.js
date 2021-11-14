import './main.css';
import Cover1 from "../images/cover-4.jpg"
import ProfilePic from "../images/icon-2.jpg"
import githubIcon from "../images/github-icon.png"
import mediumIcon from "../images/medium-icon.png"
import doubanIcon from "../images/douban-icon.png"
import instagramIcon from "../images/instagram-icon.png"

function Main() {
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
      <p class="intro">A senior Math major at the University of Rochester, CS minor. You can usually find me solving algorithmic problems, learning, drawing, reading, writing, snapping photos and swimming. 
      Click on the Instagram and Medium Icon to find my photos and blogs!  
      <br/>Email: tma8@u.rochester.edu
      </p>
      <div class="body">
        <div class="category">
          <div class="categoryName">
            <p class="texts">Coding Projects</p>
          </div>
        </div>
        <div class="content-codingProject">
          <p class="texts"><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/contests">Codeforces Online Competitions and Practices (July 2021) (All titles are clickable)</a></b>
            <br/>• In Python, attended a few weekly algorithmic competitions and solved algorithmic problems online using number theory, dynamic programming, and greedy algorithm, and more.
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/sufian27/Hidden-Markov-Model">ML HHM, Neural Networks and MLP (April 2021)</a></b>
            <br/>• Using python, built a simple Multilayer Perceptron, a two-layer Neural Network and a Hidden Markov Model from scratch. Trained the models on 5 different dateset and achieved 100%, 97%, 94%, 99$, 76% accuracy respectively. Wrote simple prediction and Viterbi prediction methods to predict the next word for a sentence for the Hidden Markov Model.
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/music-fft-visualizer">Music FFT Visualizer (March 2021)</a></b>
            <br/>• Using Django, MySQL and JavaScript, implemented a web browser music player that visualize the song by its amplitude using the Hanning function and by its frequency domain through applying Short-Term Fourier Transform to its signal data. 
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/Conway-s-Game-of-Life">Conway’s Game of Life (March 2021)(THIS GAME IS DOWNLOADABLE)</a></b>
            <br/>• In JavaScript, HTML and CSS, built a web browser game based on Conway’s Game of Life. (Download the repo and click on conwayGameOfLife.html to start playing)
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/ProjectAUX">ProjectAUX (Oct 2020)</a></b>
            <br/>• In React Expo, developed an app that allow people to listen to music together with friends from anywhere.</p>
        </div>
      </div>
      <div class="body">
        <div class="category">
          <div class="categoryName">
            <p class="texts">Blogs</p>
          </div>
        </div>
        <div class="content">
          <div class="blogEntry">
            <p class="date">Aug 28</p>
            <p class="title"><a style={{"text-decoration":"none"}} href="/quietness">
            The Power of Quietness</a>
            </p>
          </div>
          <div class="blogEntry">
            <p class="date">Aug 17</p>
            <p class="title"><a style={{"text-decoration":"none"}} href="/peopleinpsychward">
            People I Met in the Psych Ward</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Main;
