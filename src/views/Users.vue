<template>
  <div id="users-CRUD">
    <el-button
      type="primary"
      plain
      @click="fetchUsers"
    >
      Primary
    </el-button>
    <el-row>
      <el-button
        icon="el-icon-male"
        round
      />
      <el-button
        icon="el-icon-female"
        round
      />
      <el-button
        icon="el-icon-sunny"
        round
      />
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Users',
  methods: {
    async fetchUsers() {
      const { data: { results } } = await axios.get('https://randomuser.me/api/?results=20');

      this.users = results;
    },
  },
};
</script>
