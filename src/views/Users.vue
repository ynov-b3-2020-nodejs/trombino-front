<template>
  <div class="users">
    <el-button
      type="primary"
      plain
      @click="fetchUsers"
    >
      Primary
    </el-button>
    <el-row>
      <el-button
        v-model="gender"
        value="male"
        icon="el-icon-male"
        round
      />
      <el-button
        v-model="gender"
        value="female"
        icon="el-icon-female"
        round
      />
      <el-button
        v-model="gender"
        value="*"
        icon="el-icon-sunny"
        round
      />
    </el-row>
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Tel</th>
            <th>
              <button
                id="buttonAge"
                style="border: none"
                @click="buttonAgeState"
              >
                <i
                  class="fas"
                  :class="{'fa-sort': sortAge === 0, 'fa-sort-up': sortAge === 1, 'fa-sort-down': sortAge === -1}"
                >Age</i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in filterMembers"
            :key="user"
          >
            <th>
              <img
                :src="user.picture.thumbnail"
                alt=""
              >
            </th>
            <th>{{ user.name.first }} {{ user.name.last }}</th>
            <th>{{ user.email }}</th>
            <th>{{ user.phone }}</th>
            <th>{{ user.dob.age }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import GetUsers from '@/components/GetUsers';

export default {
  name: 'Users',
  users: [],
  gender: '*',
  sortAge: 0,
  component: {
    GetUsers,
  },
  computed: {
    filterMembers() {
      let filtered = this.users;
      if (this.gender) {
        if (this.gender !== '*') {
          filtered = filtered.filter(
            m => m.gender.toLowerCase() === this.gender.toLowerCase(),
          );
        }
      }
      if (this.search) {
        filtered = filtered.filter(
          m => (`${m.name.first} ${m.name.last}`)
            .toLowerCase()
            .includes(this.search),
        );
      }
      if (this.sortAge) {
        filtered = filtered.sort((user1, user2) => (user1.dob.age - user2.dob.age) * this.sortAge);
      }
      return filtered;
    },
  },
  methods: {
    async fetchUsers() {
      this.users = GetUsers.getUsers(20);
    },
    buttonAgeState() {
      switch (this.sortAge) {
        case 0:
          this.sortAge = 1;
          break;
        case 1:
          this.sortAge = -1;
          break;
        default:
          this.sortAge = 0;
          break;
      }
    },
  },
};
</script>
