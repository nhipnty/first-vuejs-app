<template>
  <div class="container">
    <div class="adding">
      <form @submit.prevent="addTask">
        <input type="text" placeholder="Need to do" v-model="task" />
      </form>
    </div>
    <div class="list">
      <div v-for="(task, index) in tasks" :key="index">
        <Task @removeTask="removeTask(index)" :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Home",
  components: {
    Task,
  },
  data() {
    return {
      task: "",
      tasks: [
        { name: "sssss", isDone: false },
        { name: "cba", isDone: true },
      ],
    };
  },
  methods: {
    addTask() {
      this.tasks.push({ name: this.task, isDone: false });
      this.task = "";
    },
    removeTask(index) {
      if (confirm(`index: ${index}`)) {
        this.tasks.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 700px;
  margin: 10pt auto;
}

.list {
  margin-top: 20px;
}
</style>