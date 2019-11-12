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
      <el-input
        placeholder="Firstname"
        v-model="firstName"
        clearable>
      </el-input>

      <el-input
        placeholder="LastName"
        v-model="lastName"
        clearable>
      </el-input>

      <el-input
        placeholder="email@domaine.com"
        v-model="email"
        clearable>
      </el-input>

      <el-input
        placeholder="(613)-960-8279"
        v-model="cell"
        clearable>
      </el-input>

      <el-input
        placeholder="22"
        v-model="age"
        clearable>
      </el-input>

      <router-link
        class="el-button el-button--primary is-circle"
        :to="{name: 'UserProfileId', params: $route.params}"
      >
        <fa-icon :icon="['fa', 'check']" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUsers } from '@/components/GetUsers';

export default {
  name: 'UserProfileEdit',
  data() {
    return {
      users: [],
      firstName: '',
      lastName: '',
      email: '',
      cell: '',
      age: null,
    };
  },
  computed: {
    userProfile() {
      return this.users.find(userObj => userObj.login.uuid === this.$route.params.id);
    },
  },
  async beforeMount() {
    this.users = await getUsers();
    this.firstName = this.userProfile.name.first;
    this.lastName = this.userProfile.name.last;
    this.email = this.userProfile.email;
    this.cell = this.userProfile.cell;
    this.age = this.userProfile.dob.age;
  },
  methods: {
    updateUser() {
      this.userProfile.name.first = this.firstName;
      this.userProfile.name.last = this.lastName;
      this.userProfile.email = this.email;
      this.userProfile.cell = this.cell;
      this.userProfile.dob.age = this.age;
      
    },
  },
};
</script>
