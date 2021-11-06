export default {
    Add(state, payload) {
        state.tasks.push(payload)
    },
    Remove(state, payload) {
        state.tasks.splice(payload, 1);
    }
}