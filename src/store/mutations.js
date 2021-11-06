export default {
    Add(state, payload) {
        state.tasks.push(payload)
    },
    Remove(state, payload) {
        state.tasks.splice(payload, 1);
        console.log(state.tasks)
    },
    Done(state, payload) {
        state.tasks[payload].isDone = !state.tasks[payload].isDone
        console.log(state.tasks)
    }
}