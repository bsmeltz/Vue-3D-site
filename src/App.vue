<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <router-link to="/">Home </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about"> Gallery </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/machine"> Machinery </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/supplies"> Supplies</router-link>
              </li>
              <!--<li class="nav-item">
                <a class="nav-link" href="resource.html">Resources</a>
              </li>-->
            </ul>
      </div>
    </div>
  
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.nav-link{
  color: blue;
}
 
</style>
