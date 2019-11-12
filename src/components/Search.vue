<template>
  <div id="Search">
    <el-input
      v-model="search"
      
      :placeholder="Who"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  computed: {

  },
};
</script>

<style scoped>

</style>
