<template>
  <div class="carousel-wrapper">
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div v-for="i in 5" :key="i" class="swiper-slide">
          <div class="swiper-bg">
            <img
              class="swiper-image"
              :src="generateImage(i)"
              data-swiper-parallax="-23%"
            />
          </div>
          <div class="swiper-overlay">
            <div></div>
            <!-- Each slide has parallax title -->
            <div class="title" data-swiper-parallax="-100">
              1/200 F2.3" ISO 200
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      options: {
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
  methods: {
    generateImage(index) {
      const baseDimension = 1600
      let dimensions = {
        width: baseDimension,
        height: baseDimension / 2,
      }

      if (index % 2) {
        dimensions = {
          width: baseDimension / 2,
          height: baseDimension,
        }
      }
      const { width, height } = dimensions
      return `https://picsum.photos/${width}/${height}?random=${index}`
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
.swiper-container {
  height: 100vh;
}

.carousel-wrapper {
  width: 100vw;
  height: 100vh;
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;

    .swiper-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      .swiper-image {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }

    .swiper-overlay {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      color: #fff;
      text-shadow: 0px 0px 5px #000;
      margin: 2.5vh 0;
      font-size: 1.5rem;
      z-index: 2;
    }
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    box-shadow: 0px 0px 5px #000;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #000;
    box-shadow: 0px 0px 5px 4px #fff;
  }
}
</style>
