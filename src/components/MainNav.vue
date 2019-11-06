<template>
  <nav id="main-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><span> | </span></li>
      <li><router-link to="/users">Display all users</router-link></li>
      <li><span> | </span></li>
      <li><router-link to="/user/">Display user profile</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainNav',
});
</script>

<style scoped lang="scss">
#main-nav {
  width: 100%;

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 0;
    padding: 0;
    list-style-type: none;

    > li {
      padding: 15px 7px;

      > a {
        font-family: Roboto;
        font-weight: 600;
        text-decoration: none;
        color: #42b983;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
