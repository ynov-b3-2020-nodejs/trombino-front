<template>
  <div id="UserProfle">
    <img
      alt="Vue logo"
      src="user.pictureUrl"
    >

    <p>Hi {{ this.$route.params.id }} !</p>

    <div
      v-for="user in userProfile"
      :key="user.id.value"
    >
      <p>{{ user.name.first }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GetUsers from '@/components/GetUsers';

export default {
  name: 'UserProfile',
  data() {
    return {
      users: [],
    };
  },
  component: {
    GetUsers,
  },
  computed: {
    userProfile() {
      return this.users.find(userObj => userObj.login.uuid === this.$route.params.id);
    },
  },
  async beforeMount() {
    const res = await GetUsers.getUsers(20);
    this.users = res.data.results;
  },
};
</script>
