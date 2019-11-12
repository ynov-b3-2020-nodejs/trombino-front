<template>
  <div id="authform">
    <el-input
      id="inputMail"
      v-model="email"
      placeholder="Entrez votre mail"
      clearable
    />
    <el-input
      id="inputPass"
      v-model="pass"
      placeholder="Entrez votre mot de passe"
      clearable
      show-password
    />
    <el-button @click="verify">
      Login
    </el-button>
  </div>
</template>

<script>
import GetUsers from '@/components/GetUsers';

export default {
  name: 'AuthForm',
  data() {
    return {
      email: '',
      pass: '',
    };
  },
  methods: {
    verify() {
      if (this.email !== '' && this.pass !== '') {
        const users = GetUsers.getUsers();
        const user = users.find(element => element.email === this.email);
      } else {
        console.error('error 400, mail or password empty');
      }
    },
  },
};
</script>

<style scoped>

</style>
