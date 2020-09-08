<template>
  <div class="new-task-div">
    <form class="p-2">
      <i @click="newTask()" class="fa fa-times-circle cancel"></i>
      <div class="form-group">
        <input v-model="task.title" type="text" class="form-control" placeholder="Görev Başlığı">
      </div>
      <div class="form-group">
        <textarea v-model="task.subject" class="form-control" placeholder="Görev İçeriği"></textarea>
      </div>
      <button @click.prevent="postTask()" type="submit" class="btn btn-primary">Gönder</button>
    </form>
  </div>
</template>

<script>
import {EventBus} from "../../main";

export default {
  name: "TaskNew",
  data() {
    return {
      task: {
        title: '',
        subject: ''
      }
    }
  },
  methods: {
    newTask() {
      EventBus.$emit('taskNew', false);
    },
    postTask() {
      this.$store.dispatch('postTask', {...this.task});
    }
  }
}
</script>

<style scoped>
.new-task-div {
  background-color: #fcfcfc;
  height: 200px;
  width: 90%;
  position: fixed;
  bottom: 0px;
  border-radius: 3px;
  border: 1px solid #ececec;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}

.cancel {
  position: absolute;
  right: -10px;
  top: -10px;
  font-size: 20px;
  cursor: pointer;
  color: #d71818;
}
</style>
