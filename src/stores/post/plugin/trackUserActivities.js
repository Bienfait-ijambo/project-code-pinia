import { ref, toRef } from "vue"


export function trackUserActivities({store}){

    const userActivities=ref([])
    store.$state.userActivities = userActivities
    store.userActivities=toRef(store.$state,'userActivities')


}