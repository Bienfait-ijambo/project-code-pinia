import { ref, toRef } from "vue";


export function userHasReachThreshold({store}){

    const threshold=ref(false)
    store.$state.threshold = threshold
    store.threshold=toRef(store.$state,'threshold')

// {
//     key:val
        // 'name of user':2
// }
    const userActions=ref({})
    store.$state.userActions = userActions
    store.userActions=toRef(store.$state,'userActions')
}