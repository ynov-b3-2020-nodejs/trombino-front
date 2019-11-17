<template>
  <div
    v-if="users.lenth != 0"
    id="UserProfle"
  >
    <img
      alt="avatar"
      :src="userProfile.picture.large"
    >

    <EditableText @newValue="userProfile.name.first = $event" :value="userProfile.name.first"/>
    <EditableText @newValue="userProfile.name.last = $event" :value="userProfile.name.last"/>
    <EditableText @newValue="userProfile.email = $event" :value="userProfile.email"/>
    <EditableText @newValue="userProfile.cell = $event" :value="userProfile.cell"/>
    <EditableNumber @newValue="userProfile.dob.age = $event" :value="userProfile.dob.age"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { getUsers } from '@/components/GetUsers';
import EditableText from '@/components/EditableText';
import EditableNumber from '@/components/EditableNumber';

export default {
  name: 'UserProfile',
  components: {
    EditableText,
    EditableNumber,
  },
  data() {
    return {
      users: [],
      userProfile: {},
    };
  },
  async beforeMount() {
    this.users = await getUsers();
    this.userProfile = this.users.find(userObj => userObj.login.uuid === this.$route.params.id);
  },
};
</script>
