<template>
  <div id="app">
    <header>
      <MainNav />
      <AuthForm />
    </header>
    <router-view
      style="display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;"
    />
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue';
import AuthForm from './components/AuthForm.vue';

export default {
  name: 'App',
  components: {
    MainNav,
    AuthForm,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}
</style>
