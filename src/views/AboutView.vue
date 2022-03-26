<template>
    <!DOCTYPE html>
  <html>

  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css" />
    <title>Project Website</title>
  </head>

  <body>

    <h1>Projects</h1>
    
    <div class="container">
      <!-- <div v-for= "i in 3" :key="i">{{data[i-1]}}</div> -->
      <div class ="row" v-for= "index in data.length/3" :key="index">
        <div v-for="j in 3" :key="j">
          <div class="col-md-4 mb-3 text-center">
            <img :src="'/images/'+data[(index-1)*3+j-1].image" width="300">
            
          </div>
          <p>{{data[(index-1)*3+j-1].name}} | Time: {{data[(index-1)*3+j-1].time}}</p>
          <p>Amount of Filament: {{data[(index-1)*3+j-1].grams}}</p>
        </div>
      </div>
      </div>
    </body>
    <footer><a href="https://github.com/bsmeltz/Vue-3D-site">Repository</a></footer>
  </html>
</template>


<script>

export default {
  name: 'AboutView',
  computed: {
    data() {
      return this.$root.$data.prints;
    }
  },
}
</script>


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
  
 
img{
  width:300
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
