<template>
  <div id="EditableText">
    <p v-if="!edit">
      {{ this.value }}
    </p>
    <el-button type="primary" icon="el-icon-edit" circle v-on:click="toogleEdit" v-if="!edit"></el-button>

    <el-input
      v-if="edit"
      placeholder="Entrez quelque chose"
      v-model="value"
      @keyup.enter.native="toogleEdit"
      clearable>
    </el-input>
    <el-button type="primary" icon="el-icon-check" circle v-on:click="toogleEdit" v-if="edit"></el-button>

  </div>
</template>

<script>
export default {
  name: 'EditableText',
  data () {
    return {
      edit: false,
    };
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    toogleEdit () {
      this.$emit('newValue', this.value);      
      this.edit ? this.edit = false : this.edit = true;
    },
  },
};
</script>

<style scoped lang="scss">
  #EditableText
  {
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    align-items: center;

    margin: 10px;

    > * {
      margin: 0 10px;
    }
  }
</style>
