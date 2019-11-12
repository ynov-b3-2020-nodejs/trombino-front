<template>
  <div id="authform">
    <el-input
      v-model="mail"
      placeholder="Entrez votre mail"
      clearable
    />
    <el-input
      v-model="pass"
      placeholder="Entrez votre mot de passe"
      clearable
      show-password
    />
    <el-button></el-button>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      mail: '',
      pass: '',
    };
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
