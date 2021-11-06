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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Task,
  },
  data() {
    return {
      task: "",
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["AddTask", "RemoveTask"]),
    addTask() {
      this.AddTask({ name: this.task, isDone: false });
      this.task = "";
    },
    removeTask(index) {
      if (confirm(`index: ${index}`)) {
        this.RemoveTask(index);
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