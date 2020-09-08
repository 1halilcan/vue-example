<template>
  <div class="row bg-light">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" to="/panel/gorevlerim" class="nav-item ">
            <a class="nav-link" href="#">Görevlerim</a>
          </router-link>
          <router-link tag="li" to="/panel/tamamlanmis-gorevlerim" class="nav-item ">
            <a class="nav-link" href="#">Tamamlanan Görevlerim</a>
          </router-link>
          <li class="nav-item">
            <button @click="newTask()" class="btn btn-success mr-auto">Yeni Görev Ekle</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {EventBus} from "../../main";

export default {
  name: "Task",
  methods: {
    newTask() {
      EventBus.$emit('taskNew', true)
    }
  }
}
</script>

<style scoped>

</style>
