<template>
  <div>
    <task-header/>
    {{ routerComponent }}
    <!--tasks-ul da sıkıntı var! -->
    <!--created olduğunda nerede oluşturulcak ???? -->
    <component :is="routerComponent"></component>
    <transition name="task-animate" mode="out-in">
      <task-new v-if="taskNew"></task-new>
    </transition>
  </div>
</template>

<script>
import {EventBus} from "../../main";
import TaskHeader from "./TaskHeader";
import Tasks from "./Tasks";
import CompleteTasks from "./CompleteTasks";
import TaskNew from "./TaskNew";
import Task from "./TaskHeader";

export default {
  name: "Tasks",
  data() {
    return {
      taskNew: false
    }
  },
  mounted() {
    EventBus.$on('taskNew', value => {
      this.taskNew = value;
    });
  },
  computed: {
    routerComponent() {
      return this.$store.state.routerComponent;
    }
  },
  components: {
    Task,
    TaskHeader,
    Tasks: 'tasks-ul',
    TaskNew,
    CompleteTasks
  }
  ,
  methods: {
    fsa() {

    }
  }
  ,
  created() {
    console.log("ok");
  }

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
