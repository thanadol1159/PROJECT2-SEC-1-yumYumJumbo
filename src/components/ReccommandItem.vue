<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import db from '../../data/db.json'
const id3 = 3
const ckID =(e) => {return console.log(e.target.id)}

</script>

<template>
  <div class="flex justify-around">
    <div></div>
    <div>
      <div class="section">
        <div class="image-container">
          <img :id="3" @click="ckID($event)" src="../assets/IMGrec/blackshirt.jpg" />
        </div>
      </div>
      <div class="section">
        <div class="image-container">
          <img :id="2" @click="ckID($event)" src="../assets/IMGrec/tospace.jpg" />
        </div>
      </div>
      <div class="section">
        <div class="image-container">
          <img :id="6" @click="ckID($event)" src="../assets/IMGrec/line.jpg" />
        </div>
      </div>
      <div class="section">
        <div class="image-container">
          <img :id="12" @click="ckID($event)" src="../assets/IMGrec/dress.jpg" />
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<style scoped>
.section {
  display: flex;
  min-height: 90vh;
  /* position: relative; */
  justify-content: center;
  background-color: rgb(17, 17, 17);
}

.image-container {
  position: relative;
  display: flex;
  transition: 0.2s;
  margin-bottom: 3vh;
  cursor: pointer;;
}
.image-container :hover{
  transform:scale(1.05);
  transition: 0.2s;
}


.section.active .image {
  opacity: 1;
  filter: blur(0);
}

</style>
