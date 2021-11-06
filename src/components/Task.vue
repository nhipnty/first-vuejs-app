<template>
  <div class="task">
    <span class="name-task">
      <input type="checkbox" @click="$emit('doneTask')" v-model="isDone">
      {{ task.name }}
    </span>
    <i class="fas fa-trash remove" @click="$emit('removeTask')"></i>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data() {
    return {
      isDone: this.task.isDone
    }
  }
};
</script>

<style scoped>
@import "https://use.fontawesome.com/releases/v5.15.4/css/all.css";

.task {
  font-size: 18px;
  transition: 0.2s;
  text-align: center;
  overflow: hidden;
  margin: 10px;
}

span {
  float: left;
}

i {
  float: right;
  cursor: pointer;
}

i:hover {
  color: crimson;
}

</style>