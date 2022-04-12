<template>
 <!DOCTYPE html>
<html>
    <head>
      <meta charset='UTF-8'/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <!--<link rel="stylesheet" href="../assets/styles.css">-->
        <title>Project Website</title>
    </head>
    <body>
        <div class="admin">
        <!--<h1>The Admin Page!</h1>-->
            <div class="heading">
                <h4>Add an Item</h4>
                </div>
                <div class="add">
                <div class="form">
                    <input v-model="title" placeholder="Title">
                    <input v-model="weight" placeholder="grams">
                    <input v-model="time" placeholder="hours">
                    <p></p>
                    <input type="file" name="photo" @change="fileChanged">
                    <button @click="upload">Upload</button>
                </div>
                <div class="upload" v-if="addItem">
                    <h2>{{addItem.title}}</h2>
                    <!--<textarea v-model="weight"></textarea>
                    <textarea v-model="time"></textarea>-->
                    <img :src="addItem.path" />
                </div>
                </div>
                <div class="heading">
                
                <h4>Edit/Delete an Item</h4>
                </div>
                <div class="edit">
                <div class="form">
                    <input v-model="findTitle" placeholder="Search">
                    <div class="suggestions" v-if="suggestions.length > 0">
                    <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
                    </div>
                    </div>
                </div>
                <div class="upload" v-if="findItem">
                    <input v-model="findItem.title">
                    <input v-model="findItem.weight">
                    <input v-model="findItem.time">
                    <p></p>
                    <img :src="findItem.path" />
                </div>
                <div class="actions" v-if="findItem">
                    <button @click="deleteItem(findItem)">Delete</button>
                    <button @click="editItem(findItem)">Edit</button>
                </div>
            </div>
        </div>
    </body>
</html>
</template>


<script>
import axios from 'axios';
export default {
  name: 'AdminView',
  data() {
    return {
      title: "",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      description: "",
      weight: "",
      time: "",
    }
  },
  computed: {
    suggestions(){
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a,b) => a.title > b.title);
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          weight: this.weight,
          time: this.time,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findWeight = "";
      this.findTime = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          weight: this.findItem.weight,
          time: this.findItem.time,
        });
        this.findItem = null;
        this.getItems();
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
  .form{
      align-content: center;
      padding: 20px;
  }
  h4{
      padding-left: 50px;
      padding-top: 10px;
      text-align: left;
      align-content:left;
  }
  img {
  width: 500px;
  padding: 10px;
}
  
</style>