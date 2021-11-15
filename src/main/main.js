import './main.css';
import Cover1 from "../images/cover-4.jpg"
import ProfilePic from "../images/icon-2.jpg"
import githubIcon from "../images/github-icon.png"
import mediumIcon from "../images/medium-icon.png"
import doubanIcon from "../images/douban-icon.png"
import instagramIcon from "../images/instagram-icon.png"
import codeIcon from "../images/code-icon.png"
import blogIcon from "../images/blog-icon.png"
import photoIcon from "../images/photo-icon.png"

import photo1 from "../images/photos/photo-1.jpg"
import photo2 from "../images/photos/photo-2.jpg"
import photo3 from "../images/photos/photo-3.jpg"
import photo4 from "../images/photos/photo-4.jpg"
import photo5 from "../images/photos/photo-5.jpg"
import photo6 from "../images/photos/photo-6.jpg"
import photo7 from "../images/photos/photo-7.jpg"
import photo8 from "../images/photos/photo-8.jpg"
import photo9 from "../images/photos/photo-9.jpg"
import photo10 from "../images/photos/photo-10.jpg"
import photo11 from "../images/photos/photo-11.jpg"
import drawing1 from "../images/photos/drawing-1.png"

function Main() {
  console.log("in main")
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
      <p class="intro"> 
      Senior Math major at the University of Rochester, prospective Comp Sci grad student. Artist, writer, lifelong learner.  
      </p>
      <div class="body">
        <div class="category">
          <div>
            <img class="categoryIcons" src={codeIcon} alt="Icon"/>
          </div>
          <div class="categoryName">
            <p class="texts">Coding Projects</p>
          </div>
        </div>
        <div class="content-codingProject">
          <p class="texts">
            Currently I'm working on a computational philosophy research project, and Yolo Shadow's company website that allows young adults to shadow professionals. I'm also solving algorithmic challenges, and reading and learning about reinforcement learning, computational social science, and a book called Great Ideas in Computer Science by Alan W. Biermann. Those are all great topics, and feel free to chat about them with me through <a href="https://twitter.com/yiinta_">twitter</a>.
            <br/><br/>The following is a list of my current and previous projects and their github links.
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/automated-concept-analysis">Automated Concept Analysis (Oct-Present 2021)</a></b>
            <br/>A computational philosophy research project that investigate the complexity of concepts using deep learning models. 
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/yoloventure/frontend">Yolo Shadow (Fall 2021)</a></b>
            <br/>A web app that allows young adults to shadow professionals. Designed various parts of the web app.
            <br/><br/><b>Combinatorics Research (May 2017 - Aug 2018, May 2020 - May 2021)</b>
            <br/>Under <b>Prof. Alex Iosevich</b>, reframed a number of combinatorics problems into analytical problems, and used a number of basic and advanced optimization techniques to derive bounds on them.
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/reinvent-the-wheels">Data Structures and Algorithms (Fall 2021)</a></b>
            <br/>Solved algorithmic challenges and brushed up on data structures by coding them from scratch.
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/sufian27/Hidden-Markov-Model">Machine Learning (April 2021)</a></b>
            <br/>Reinvented the wheels of machine learning algorithms, including Multi-layer Perceptrons, 2-layered ANN, and a Hidden Markov Language Model. Trained on scientific and language datasets.
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/music-fft-visualizer">Music Visualizer (March 2021)</a></b>
            <br/>A web app that allows you to playback a song with its pitches visualized in the bottom. Desigend everything from backend (Python, Django) to communication between frontend and backend.
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/Conway-s-Game-of-Life">Conway’s Game of Life (March 2021)</a></b>
            <br/>A web app that implemented Conway's Game of Life, a seeded algorithimically generative game. 
            <br/><br/><b><a style={{"text-decoration":"none"}} href="https://github.com/tianyi-m/ProjectAUX">ProjectAUX (Oct 2020)</a></b>
            <br/>A native app that allow people to listen to music together with friends from anywhere.
            <br/><br/><b>Customer Service Chatbot (Aug - Dec 2019)</b>
            <br/>Designed the backend of a customer service chatbot using data science, machine learning, deep learning and RESTFul API. Part of my Backend internship at AiiT, Hangzhou, PRC. 
            <br/><br/><b>Natural Language Processing Research (May 2017 - Aug 2018)</b>
            <br/>Under <b>Prof. Len Schubert</b>, annotated massive language dataset for Unscoped Episodic Logical Forms and Inference. Helped build a chatbot for elderly people. 
            </p>
        </div>
      </div>
      <div class="body">
        <div class="category">
          <div>
            <img class="categoryIcons" src={blogIcon} alt="Icon"/>
          </div>
          <div class="categoryName">
            <p class="texts">Blogs</p>
          </div>
        </div>
        <div class="content">
          <div class="blogEntry">
            <p class="date">Nov 14</p>
            <p class="title"><a style={{"text-decoration":"none"}} href="https://medium.com/@tma8/university-of-rochester-looking-back-clubs-free-time-and-friendships-ddcca8046142">
            University of Rochester — Looking Back: Clubs, Free Time and Friendships</a>
            </p>
          </div>
          <div class="blogEntry">
            <p class="date">Nov 14</p>
            <p class="title"><a style={{"text-decoration":"none"}} href="https://medium.com/@tma8/university-of-rochester-looking-back-learning-and-research-363a4540ad60">
            University of Rochester — Looking Back: Learning and Research</a>
            </p>
          </div>
          <div class="blogEntry">
            <p class="date">Nov 13</p>
            <p class="title"><a style={{"text-decoration":"none"}} href="https://medium.com/@tma8/motivation-to-acheive-or-to-enjoy-f863a7c4206">
            Motivation: to acheive or to enjoy?</a>
            </p>
          </div>
          <div class="blogEntry">
            <p class="date">Aug 28</p>
            <p class="title"><a style={{"text-decoration":"none"}} href="https://medium.com/@tma8/the-power-of-quietness-a33ca9aa8383">
            The Power of Quietness</a>
            </p>
          </div>
          <div class="blogEntry">
            <p class="date">Aug 17</p>
            <p class="title"><a style={{"text-decoration":"none"}} href="https://medium.com/@tma8/people-i-met-in-the-psych-ward-%E6%88%91%E5%9C%A8%E5%BF%83%E7%90%86%E5%8C%BB%E9%99%A2%E9%81%87%E5%88%B0%E7%9A%84%E4%BA%BA-77d149c3a07">
            People I Met in the Psych Ward</a>
            </p>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="category">
          <div>
            <img class="categoryIcons" src={photoIcon} alt="Icon"/>
          </div>
          <div class="categoryName">
            <p class="texts">Arts & Adventures</p>
          </div>
        </div>
        <div class="photo-row">
          <div>
            <img src={photo8} alt="photography" class="photos-sqr"></img>
            <p class="card-text">Seattle, August 9, 2021</p>
          </div>
          <div>
            <img src={photo9} alt="photography" class="photos-sqr"></img>
            <p class="card-text">Seattle, August 9, 2021</p>
          </div>
        </div>
        <div class="photo-row">
          <div>
            <img src={photo6} alt="photography" class="photos-sqr"></img>
            <p class="card-text">Seattle, August 7, 2021</p>
          </div>
          <div>
            <img src={photo7} alt="photography" class="photos-sqr"></img>
            <p class="card-text">Seattle, August 7, 2021</p>
          </div>
        </div>
        <div class="photo-row">
          <div>
            <img src={photo4} alt="photography" class="photos-sqr"></img>
            <p class="card-text">Seattle, August 7, 2021</p>
          </div>
          <div>
            <img src={photo5} alt="photography" class="photos-sqr"></img>
            <p class="card-text">Seattle, August 7, 2021</p>
          </div>
        </div>
        <div class="photo-row">
          <div>
            <img src={photo2} alt="photography" class="photos-sqr"></img>
            <p class="card-text">NYC, May 28, 2021</p>
          </div>
          <div>
            <img src={photo3} alt="photography" class="photos-sqr"></img>
            <p class="card-text">NYC, June 5, 2021</p>
          </div>
        </div>
        <div class="photo-row">
          <div>
            <img src={photo1} alt="photography" class="photos-sqr"></img>
            <p class="card-text">Rochester, NY   April 18, 2021</p>
          </div>
          <div>
            <img src={photo11} alt="photography" class="photos-h"></img>
            <p class="card-text">NYC, May 26, 2021</p>
          </div>
        </div>
        <div class="content">
          <p>Click <a href="https://www.instagram.com/_sans_z__/">here</a>, <a href="https://www.instagram.com/sotlamb/">here</a> and <a href="https://tma437.lofter.com/">here</a> for more.</p>
        </div>
      </div>
      <div class="footer">
        <p>Last updated: 11/15/2021</p>
      </div>
    </div>
    </body>
  );
}

export default Main;
