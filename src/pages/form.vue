<template>
  <el-card style="width: 500px">
    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker v-model="form.birthday" type="date" style="width: 100%"></el-date-picker>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="submit">提交</el-button>
  </el-card>
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
      data: '',
      form: {
        name: '',
        age: '',
        birthday: '',
        email: ''
      }
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('addPeopleAction', this.form)
    }
  }
}
</script>

<style scoped>

</style>
