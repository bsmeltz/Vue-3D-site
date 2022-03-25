<template>
    <!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
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
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="machine">Machinery</a>
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

  <p></p>

  <div class="container">
    <!-- Content Row -->
      <div class="row">
          
        <div class="col-md-6 mb-3 text-center">
            <img src="../../public/images/Ender 3 pro.jpg" width="400">
        </div>
        <div class="col-md-6 mb-3">
            <div>
                <h2>Ender 3 Pro</h2>    
                <p>This is the 3D printer that I use. I have only made a few adjustments to it and it works really well. Here are a few of the adjustments I've made:</p>
                <ul>
                    <li><p>Added a cover to the screen and covered the lcd board</p></li>
                    <li><p>Upgraded the filament tube and nozzle</p></li>
                    <li><p>Added a filament guide, as well as bearings to a filament holder so the filament rolls smoothly</p></li>
                    <li><p>Added open-source software so I can control the stepper motors</p></li>
                    <li><p>Added guides and holders for the wires</p></li>
                    <li><p>And printed a custom fan blade when mine broke</p></li>
                </ul>
            </div>
        </div>
      </div>

    </div>
</body>
<footer><a href="https://github.com/bsmeltz/Vue-3D-site">Repository</a></footer>
</html>
</template>