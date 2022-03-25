<template>
  <!DOCTYPE html>
<html>
    <head>
      <meta charset='UTF-8'/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="../assets/styles.css">
        <title>Project Website</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about">Gallery</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="machine">Machinery</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="supplies">Supplies</a>
                      </li>
                      <!--<li class="nav-item">
                        <a class="nav-link" href="resource.html">Resources</a>
                      </li>-->
                    </ul>
              </div>
            </div>
          </nav>

          <div class="container">
            <!-- Content Row -->
            <div class="row">
              <div class="col-md-12 mb-3">
                <h2>3D Printing</h2>
              </div>
            </div>
              <div class="row">
               
                <div class="col-md-6 mb-3 text-center">
                  <p>Hello, my name is Brennan Smeltzer. I am a 3D printing enthusiast and I have a couple of really cool projects that I'd like to show off.</p>
          
                </div>
                <div class="col-md-6 mb-3 text-center">
                  <p>This is a website dedicated to showing off my 3D printer and some of the projects I've worked on.
                    I also show the material I use and any tools or other suplies that I have used to get really nice finishes on a project.</p>
                </div>
              </div>
              <div class="row">
                
                <div class="col-md-6 mb-3">
                  <img src="../../public/images/Profile.jpg" width="400" height="500">
          
                </div>
                <div class="col-md-6 mb-3">
                  <img src="../../public/images/Full Mando.jpg" width="400" height="500">
                </div>
                
              </div>
          </div>
      </body>
      <footer><a href="https://github.com/bsmeltz/Vue-3D-site">Repository</a></footer>
    </html>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .grid-container {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 100%;
  }
  .grid{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction:column;
    align-items:center;
  }
  .grid-item {
    width: 100%;
    height: 100%;
    padding: 5px;
    
  }
 
.rotr{
  transform: rotateZ(90deg)
}

  .text{
      width: 30%;
      height: 30%;
  }
  .hide{
      font-size: .5em;
      color: lightgrey;
      text-align: center;
  }
  body{
      background-color:darkslategray;
      color: lightgrey;
  }
  hr{
      color:lightgrey;
  }
  .review{
    height:60%;
    width: 75%;
    border: 1px solid #fff; 
    font-family:'Courier New', Courier, monospace;
    border-radius: 40px;
    padding:12px;
    background-color:lightgrey;
    color:black;
  }
  footer{
    text-align: center;
  }
  h2{
      text-align: center;
  }
</style>


<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
