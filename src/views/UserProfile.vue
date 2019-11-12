<template>
  <div id="UserProfle">
    <img
      alt="Vue logo"
      src="user.pictureUrl"
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        firstName: 'Julien',
        lastName: 'SEIXAS',
        pictureUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/21616554_386031441815958_3852721861291098557_n.jpg?_nc_cat=106&_nc_oc=AQk-iegCxQUerAhm4zOXg3VYTpyH5kVQR-p-1QiR5EYWLt3XrSzw1n75ymHb0s071vsvvMojqYxKmiNlz9Y-PsWW&_nc_ht=scontent-cdt1-1.xx&oh=c80cef3b4f0543abe85925b64f5b4bef&oe=5E44CA8A',
      },
    };
  },
};
</script>
