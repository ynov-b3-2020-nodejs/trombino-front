<template>
  <div
    v-if="userProfile"
    id="UserProfle"
  >
    <img
      alt="avatar"
      :src="userProfile.picture.large"
    >

    <div>
      <p>{{ userProfile.name.first }}</p>
      <p>{{ userProfile.name.last }} </p>
    </div>
    <p>{{ userProfile.email }} </p>
    <p>{{ userProfile.cell }} </p>
    <p>{{ userProfile.dob.age }} ans</p>

    <router-link
      class="el-button el-button--primary is-circle"
      :to="{name: 'UserProfileEdit', params: $route.params}"
    >
      <i class="el-icon-edit" />
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUsers } from '@/components/GetUsers';

export default {
  name: 'UserProfile',
  data() {
    return {
      users: [],
    };
  },
  computed: {
    userProfile() {
      return this.users.find(userObj => userObj.login.uuid === this.$route.params.id);
    },
  },
  async beforeMount() {
    this.users = await getUsers();
  },
};
</script>
