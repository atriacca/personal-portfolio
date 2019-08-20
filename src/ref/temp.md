/* Colors: 
  Cerulean blue: '#4484CE',
  Aluminum gray: '#D9D9D9',
  Light gold: '#F9Cf00',
  Tangerine orange: '#F19F4D',
  Black: 'rgb(4, 10, 17)' 
*/

* {
  box-sizing: border-box;
}
body {
  background-image: url(/static/media/cement.452aa37e.jpg);
  background-size: cover;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
}

.resumeNoDisplay {
  display: none;
}
.resumeDisplay {
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto auto auto;
  min-height: 300px
}
.resumeDownloadDisplay {
  margin-top: 20px;
  display: grid;
  
  min-height: 300px
}
.aboutDivCollapsed {
  color: #565656;
  max-height: 60px;
  overflow: hidden;
  -webkit-transition: all .6s ease-in-out 0s;
  transition: all .6s ease-in-out 0s;
}
.aboutDivCollapsed:hover {
  max-height: 300px;
}
i {
  -webkit-transition: all .4s ease-in-out 0s;
  transition: all .4s ease-in-out 0s;
}
.aboutDivCollapsed:hover i {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.resume-button:focus {
  outline: none;
}
.footer-icon:hover {
  color: #565656;
}
.project {
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}
.project:hover {
  box-shadow: 2px 2px#565656;
}
*{
    box-sizing:border-box
}
body{
    background-image:url(/static/media/cement.452aa37e.jpg);
    background-size:cover;
    font-family:Source Sans Pro,sans-serif;
    padding:0;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    margin:0
}
.resumeNoDisplay{
    display:none
}
.resumeDisplay{
    grid-template-columns:auto auto auto
}
.resumeDisplay,.resumeDownloadDisplay{
    margin-top:20px;
    display:grid;
    min-height:300px
}
.aboutDivCollapsed{
    color:#565656;
    max-height:60px;
    overflow:hidden;
    -webkit-transition:all .6s ease-in-out 0s;
    transition:all .6s ease-in-out 0s
}
.aboutDivCollapsed:hover{
        max-height:300px
}
i{
    -webkit-transition:all .4s ease-in-out 0s;
    transition:all .4s ease-in-out 0s
}
.aboutDivCollapsed:hover i{
    -webkit-transform:rotate(90deg);
    transform:rotate(90deg)
}
.resume-button:focus{
    outline:none
}
.footer-icon:hover{
    color:#565656
}
.project{-webkit-transition:all 1s ease;
    transition:all 1s ease
}
.project:hover{
    box-shadow:2px 2px#565656
}
/*# sourceMappingURL=main.1ed405ff.chunk.css.map */


<div class="project" 

style="
display: grid; 
grid-template-columns: minmax(180px, 20%) minmax(180px, 50%) minmax(180px, 30%); 
grid-template-rows: auto auto; 
column-gap: 20px; 
padding: 20px; 
margin: 5px; 
border: 1px solid rgb(86, 86, 86); 
border-radius: 5px;
">

<div style="grid-column: 1 / 4;">
<span style="text-align: center; color: rgb(118, 50, 63);">
<h3 style="margin: 6px 10px 10px;">Trivia Challenge</h3>
</span>
</div>
<div><img src="/static/media/trivia.32cdad5c.png" alt="Project" style="height: 200px;">
</div>
<div><span>This project shows how React can replicate multiple components using API requests to supply unique content. It is a Single Page Application (SPA), demonstrating how React Router can be used to 'navigate' a website by selecting which components to display.  It also illustrates how React State can store and use session data to dynamically render objects and content by saving correct answers and the user's answers to State then comparing them. </span><br><span>Check it out <a href="http://triviachallenge.surge.sh" target="_blank" rel="noopener noreferrer">here.</a></span></div><div><span style="color: rgb(118, 50, 63);">//</span> Built with React, Node.js, HTML, and CSS. <br><br><span style="color: rgb(118, 50, 63);">//</span> This was a solo project. <br><br><span><span style="color: rgb(118, 50, 63);">// </span>Made using the Opentdb.com API.<br><br></span></div></div>