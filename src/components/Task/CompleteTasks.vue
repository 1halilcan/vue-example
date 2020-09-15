<template>
  <div class="row">
    <ul class="tasks-ul">
      <!--görev tamamlandı butonu ekle! -->
      <li v-for="index in 5" @click="alert();">
        <div class="tasks-event">
          <i class="fa fa-trash"></i>
        </div>
        dasdad
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CompleteTasks",
}
</script>

<style scoped>
.tasks-ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
}

.tasks-ul li {
  border: 1px solid #ffd2d2;
  border-radius: 10px;
  padding: 23px;
  transition: .3s;
  color: black;
  background-color: #fffafa;
  margin: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  position: relative;
  cursor: pointer;
}

.tasks-ul li:hover {
  background-color: #fff5f5;
}

.tasks-ul li:hover .tasks-event {
  opacity: 1;
  transform: translateY(0px);
}

.tasks-event {
  color: #ff4848;
  position: absolute;
  right: 0px;
  top: 0px;
  opacity: 0;
  transition: .2s ease-in-out;
  transform: translateY(-5px);
}
</style>
