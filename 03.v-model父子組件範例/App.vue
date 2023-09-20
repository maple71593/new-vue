<template>
  <div class="app">
    <BaseSelect @change="selectId = $event" :selectId='selectId'></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
  methods: {

  }
}
</script>

<style>
</style>