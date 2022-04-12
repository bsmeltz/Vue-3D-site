<template>
    <!DOCTYPE html>
  <html>

  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css" />
    <title>Project Website</title>
  </head>

  <body>
    <div class="home">
      <section class="image-gallery">
        <div class="image" v-for="item in items" :key="item.id">
          <h2>{{item.title}}</h2>
          <img :src="item.path" />
          <p>{{item.weight}} | 
          {{item.time}}</p>
        </div>
      </section>
    </div>




<!--
    <h1>Projects</h1>
    
    <div class="container">
      
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
-->
    </body>
    
  </html>
</template>


<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'AboutView',
  data() {
    return {
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
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
  
/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 300;
  padding: 10px;
}

.image img {
  
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
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
