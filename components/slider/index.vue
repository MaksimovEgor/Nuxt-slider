<template>
  <div class="">
    <div class="head _container">
      <h1>Новые поступления</h1>
      <div class="control hidden-down-desktop">
        <b-icon-arrow-left
          @click="showPrev"
          class="control-icon"
        ></b-icon-arrow-left>
        <b-icon-arrow-right
          @click="showNext"
          class="control-icon"
        ></b-icon-arrow-right>
      </div>
    </div>

    <VueSlickCarousel
      ref="carousel"
      v-if="slides.length"
      v-bind="slickOptions"
      class="carousel"
    >
      <div v-for="slide in slides" :key="slide.id">
        <card :slide="slide"></card>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props: {
    slides: [],
  },
  data() {
    return {
      slickOptions: {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        // autoplay: true,
        slidesToScroll: 6,
        swipeToSlide: true,
        arrows: false,
        rows: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    showPrev() {
      this.$refs.carousel.prev()
    },
    showNext() {
      this.$refs.carousel.next()
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
