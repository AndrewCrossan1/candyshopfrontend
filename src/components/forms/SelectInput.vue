<template>
    <b-form-select class="form-select select-hot-pink" v-model="selection">
      <b-form-select-option value="null" disabled>Select an option</b-form-select-option>
      <b-form-select-option v-for="{value, text} in options" v-bind:key="value" :value="value">{{ text }}</b-form-select-option>
    </b-form-select>
</template>

<script>
export default {
  name: "SelectInput",
  data() {
    return {
      selection: null,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>