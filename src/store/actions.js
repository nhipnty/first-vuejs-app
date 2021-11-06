export default {
    AddTask(context, payload) {
        context.commit('Add', payload)
    },
    RemoveTask(context, payload) {
        context.commit('Remove', payload)
    }
}