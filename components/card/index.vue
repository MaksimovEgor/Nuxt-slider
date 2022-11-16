<template>
  <div class="card">
    <div class="card-image-wrapper">
      <card-label class="label" :sticker="slide.stickers[0]" />
      <img :src="slide.image" class="card-image" />
    </div>

    <p class="card-articul">{{ slide.article }}</p>

    <h6 class="card-title">{{ slide.title }}</h6>

    <b-form-rating
      no-border
      readonly
      v-model="slide.rating"
      variant="warning"
      class="card-rating hidden-down-desktop"
    ></b-form-rating>

    <span
      class="card-old hidden-down-desktop"
      :class="!slide.prices.rrc.old_price ? '--transparent' : ''"
      >{{ slide.prices.rrc.old_price }} руб.</span
    >
    <span class="card-current">{{ slide.prices.rrc.price }} руб.</span>

    <span class="card-opt hidden-up-desktop"
      ><span class="--light">Опт:</span> {{ slide.prices.opt.price }} руб.</span
    >
    <span
      class="card-discount hidden-up-desktop"
      :class="!slide.prices.rrc.old_price ? '--transparent' : ''"
      ><span class="--light">Скидка</span> {{ discount }} %</span
    >

    <div class="controls">
      <b-button centered href="#" class="card-btn">
        <BIconCart2 class="cart-icon" />
      </b-button>
      <b-icon-heart class="heart-icon" />
      <!--  TO-DO: Знаю что так не надо вставлять svg, можно как минимум вынести
        в отдельный компонент, но время поджимает -->
      <svg
        class="graph-icon"
        width="19"
        height="24"
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_127_75)">
          <path
            d="M12 7V20"
            stroke="#D2D2D2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 3V20"
            stroke="#D2D2D2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 10V20"
            stroke="#D2D2D2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 11V20"
            stroke="#D2D2D2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_127_75">
            <rect width="19" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
import cardLabel from './label.vue'
export default {
  components: { cardLabel },
  props: {
    slide: {},
  },
  computed: {
    discount() {
      return Math.ceil(
        100 -
          (this.slide.prices.rrc.price * 100) / this.slide.prices.rrc.old_price
      )
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
