<template>
  <div>
    <router-link tag="a" to="/panel/gorevlerim">
      görevlerim
    </router-link>
    <button @click="$store.commit('logout')">Çıkış Yap</button>
  </div>
</template>

<script>
export default {
  name: "AuthMainPage",
}
</script>

<style scoped>

</style>
