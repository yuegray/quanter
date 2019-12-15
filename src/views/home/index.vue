<template>
  <div class="wrapper">
    {{pageName}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: 'homePage'
    }
  },
  created () {
    // console.log(Vue.axios, 'ssss')
    console.log('dddaxios')
    console.log(this.api.get, 'gettt')
    this.api.get().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
