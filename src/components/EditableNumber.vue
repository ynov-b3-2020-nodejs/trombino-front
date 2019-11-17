<template>
  <div id="EditableNumber">
    <p v-if="!edit">
      {{ this.value }}
    </p>
    <el-button type="primary" icon="el-icon-edit" circle v-on:click="toogleEdit" v-if="!edit"></el-button>

    <el-input-number
      v-if="edit"
      v-model="value"
      @keyup.enter.native="toogleEdit"
      controls-position="right"
      @change="handleChange" :min="1" :max="10">
    </el-input-number>
    <el-button type="primary" icon="el-icon-check" circle v-on:click="toogleEdit" v-if="edit"></el-button>

  </div>
</template>

<script>
export default {
  name: 'EditableNumber',
  data () {
    return {
      edit: false,
    };
  },
  props: {
    value: {
      type: Number,
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
  #EditableNumber
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
