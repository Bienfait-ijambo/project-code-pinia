function trackUserActivites(name, store) {
  const date=new Date()
  let count = 0
  store.$state.userActivities.push({
    id: count++,
    funcName: name,
    date:date.toISOString()
  })
} 
export function monitorActions({ store }) {
  const hashMap = {}
  const userName = 'ben'

  store.$onAction(({ name, args, onError }) => {
    trackUserActivites(name, store)

    if (name === 'viewSinglePost') {
      if (userName in hashMap) {
        //
        if (hashMap[userName] === store.MAX_POST_TO_READ) {
          store.$state.threshold = true
          store.$state.userActions = hashMap
          console.log('user has already reached threshold')
        } else {
          hashMap[userName] = hashMap[userName] + 1
        }
      } else {
        hashMap[userName] = 1
      }
    }

    onError(() => {
      console.log('Error occurred  in :', name)
    })
  })
}
