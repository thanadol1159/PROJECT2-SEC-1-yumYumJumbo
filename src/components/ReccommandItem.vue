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
    <div> </div>
    <div >
          <div class="section">
      <div class="image-container">
       <button class="ml-44 image"><div class="image"><img src="../assets/IMGrec/blackshirt.jpg" /></div></button>
      </div>
    </div>
    <div class="section">
      <div class="image-container">
        <button><div class="image"><img src="../assets/IMGrec/tospace.jpg" /></div></button>
      </div>
    </div>
    <div class="section">
      <div class="image-container">
        <button><div class="image"><img src="../assets/IMGrec/line.jpg" /></div></button>
      </div>
    </div>
    <div class="section">
      <div class="image-container">
        <button><div class="image"><img src="../assets/IMGrec/dress.jpg" /></div></button>
      </div>
    </div>
    </div>
    <div> </div>
  </div>
</template>
<style scoped>
body {
  margin: 0;
}

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
</style>
