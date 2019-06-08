<template>
  <div>
    <div>{{this.name}}</div>
    <div>{{this.name2}}</div>
  </div>
</template>

<script>

export default {
  name: 'page',
  data () {
    return {
      people: [],
      name: '',
      name2: ''
    }
  },
  computed: {
    getPeople: function () {
      return this.$store.getters.getPeople
    }
  },
  mounted () {
    this.people = this.getPeople
    this.name = this.people[0].name
    this.name2 = this.people[1].name
  }
}
</script>

<style scoped>

</style>
