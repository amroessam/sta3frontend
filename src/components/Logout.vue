<template>
</template>

<script>
export default {
  created:function(){
    this.$store.dispatch('logoutUser')
  }
}
</script>