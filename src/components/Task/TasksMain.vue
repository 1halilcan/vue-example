<template>
  <div>
    <task-header/>
    <router-view>
    </router-view>
    <transition name="task-animate" mode="out-in">
      <task-new v-if="taskNew"></task-new>
    </transition>
  </div>
</template>

<script>
import {EventBus} from "../../main";
import TaskHeader from "./TaskHeader";
import Tasks from "./Tasks";
import TaskNew from "./TaskNew";

export default {
  name: "Tasks",
  data() {
    return {
      deneme: 'görev başlığım',
      taskNew: false
    }
  },
  mounted() {
    EventBus.$on('taskNew', value => {
      this.taskNew = value;
    })
  },
  components: {
    TaskHeader,
    Tasks,
    TaskNew
  },
  methods: {
    fsa() {

    }
  },

}
</script>

<style scoped>
.task-animate-enter-active {
  animation: task-animate-enter .3s ease-in-out forwards;
}

.task-animate-leave-active {
  animation: task-animate-leave .3s ease-in-out forwards;
}

@keyframes task-animate-enter {
  from {
    bottom: -200px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}

@keyframes task-animate-leave {
  from {
    bottom: 0px;
    opacity: 1;
  }
  to {
    bottom: -200px;
    opacity: 0;
  }
}
</style>
