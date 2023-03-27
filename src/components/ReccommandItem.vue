<script setup>
scroll = function () {
  changeImage();
};

function changeImage() {
  let scroll = window.scrollY + window.innerHeight / 3;

  [...document.getElementsByClassName("section")].forEach((el) => {
    el.classList.remove("active");

    if (el.offsetTop <= scroll && el.offsetTop + el.offsetHeight > scroll) {
      el.classList.add("active");
    }
  });
}
changeImage();
</script>

<template>
  <div class="flex justify-around">
    <div>tag 1</div>
    <div>
      
      
      
      
      <div class="section">
        
        <div class="image-container">
            <img src="../assets/IMGrec/blackshirt.jpg" />
        </div>
      </div>
      <div class="section">
        <div class="image-container">
          <img src="../assets/IMGrec/tospace.jpg" class="wid"/>
        </div>
      </div>
      <div class="section">
        <div class="image-container">
          <img src="../assets/IMGrec/line.jpg" />
        </div>
      </div>
      <div class="section">
        <div class="image-container">
          <img src="../assets/IMGrec/dress.jpg" />
        </div>
      </div>
    </div>
    <div>tag2</div>
  </div>
</template>
<style scoped>
.section {
  display: flex;
  min-height: 90vh;
  /* position: relative; */
  justify-content: center;
}

.image-container {
  position: relative;
  display: flex;
}

.image {
  height: 100vh;
  /* position: fixed; */
  width: 100%;
  top: 0;
  mix-blend-mode: multiply;
  filter: blur(30px);
  opacity: 0;
  transition: filter 0.5s ease, opacity 0.5s ease;
}

.section.active .image {
  opacity: 1;
  filter: blur(0);
}
.wid{
  width: 781px;
}
</style>
