<template>
  <b-form-group>
    <b-form-checkbox class="form-check-brand checkbox" switch :value="value">
      <span class="form-check-label">{{ label}}</span>
    </b-form-checkbox>

  </b-form-group>
</template>

<script>
export default {
  name: "BrandFilter",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>