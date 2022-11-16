<template>
  <div class="sticker" :class="sticker.type === 'promo' ? 'promo' : 'new'">
    <span> {{ sticker.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    sticker: {},
  },
}
</script>

<style lang="scss">
.sticker {
  width: 74px;
  height: 24px;
  background: #6776b7;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* TO-DO можно вынести в ENUM */
  &.new {
    background: #6776b7;
  }
  &.promo {
    background: #7f65b7;
  }

  & span {
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    /* identical to box height, or 233% */
    color: #ffffff;
  }
}
</style>
