<template>
  <div class="users">
    <el-button
      type="primary"
      plain
      @click="fetchUsers"
    >
      Fetch
    </el-button>
    <el-radio-group v-model="gender">
      <el-radio-button
        label="male"
      >
        <fa-icon :icon="['fas', 'mars']" />
      </el-radio-button>
      <el-radio-button
        label="female"
      >
        <fa-icon :icon="['fas', 'venus']" />
      </el-radio-button>
      <el-radio-button
        label="*"
      >
        <fa-icon :icon="['fas', 'venus-mars']" />
      </el-radio-button>
    </el-radio-group>
    <div>
      <table>
        <thead>
          <tr>
            <th />
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
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in filterMembers"
            :key="user.login.uuid"
          >
            <th>
              <img
                :src="user.picture.thumbnail"
              >
            </th>
            <th>{{ user.name.first }} {{ user.name.last }}</th>
            <th>{{ user.email }}</th>
            <th>{{ user.phone }}</th>
            <th>{{ user.dob.age }}</th>
            <th>
              <router-link
                class="el-button el-button--primary"
                :to="{name: 'UserProfileId', params: { id: user.login.uuid }}"
                style="text-decoration: none"
              >
                afficher détails
              </router-link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { getUsers } from '@/components/GetUsers';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      gender: '*',
      sortAge: 0,
    };
  },
  component: {
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
      this.users = await getUsers(true);
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
