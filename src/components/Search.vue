<template>
  <div id="Search">
    <el-autocomplete
      v-model="search"
      :fetch-suggestions="querySearch"
      placeholder="Who"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import { getUsers } from './GetUsers';

export default {
  name: 'Search',
  data() {
    return {
      search: '',
      users: [],
      timeout: null,
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    querySearch(queryString, cb) {
      const listUsers = this.users;
      const results = queryString ? listUsers.filter(this.createFilter(queryString)) : listUsers;

      clearTimeout(this.timeout);
      // eslint-disable-next-line vue/no-async-in-computed-properties,vue/no-side-effects-in-computed-properties
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    concat(user) {
      return `${user.name.first} ${user.name.last}`;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    createFilter(queryString) {
      console.log(queryString);
      // return (user) => (user.name.first.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    },
    // eslint-disable-next-line vue/return-in-computed-property
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.users = getUsers();
  },
};
</script>

<style scoped>

</style>
