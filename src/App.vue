<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@media screen and (min-width: 1025px){
  #app{
  	margin: 0 auto;
  	width: 766px;
  	border-left: 1px solid #ccc;
  	border-right: 1px solid #ccc;
  }
}
</style>
