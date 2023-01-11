<template>
  <div class="small-cat-card">
    <b-card
        class="border-0 shadow shadow-sm"
        overlay
        img-src="https://picsum.photos/200/200"
        img-alt="Image of category"
        text-variant="white"
        style="position: relative"
    >
    <b-card-text class="text-end text-xl text-white text-bebas-neue position-absolute p-3" style="bottom: 0; right: 0; mix-blend-mode: difference">
      Category<br/>
      Name
    </b-card-text>

    </b-card>
  </div>
</template>

<script>
export default {
  name: "small-cat-card"
}
</script>

<style scoped>

</style>