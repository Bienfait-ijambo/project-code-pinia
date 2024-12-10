import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useQueryPostStore = defineStore('query-post-store', () => {
  const loading = ref(false)
  const posts = ref([])
  const post=ref({})

  const userName=ref('Ben')

  async function fetchPostData() {
    try {
        loading.value=true
      const res = await fetch('http://127.0.0.1:8000/api/posts')
      const data = await res.json()
      posts.value = data
      loading.value=false

    } catch (error) {
      loading.value=false

      console.log(error.message)
    }
  }

  function viewSinglePost(slug){
    const postData=localStorage.getItem('post-'+slug)
    if(typeof postData!=='object'){
        const parsePostData=JSON.parse(postData)
       
        post.value= parsePostData
    }else{
       
        const filterPostArray=posts.value.filter((post) => post.slug===slug)
        if(filterPostArray.length>0){
            localStorage.setItem('post-'+slug,JSON.stringify(filterPostArray[0]))
            post.value=filterPostArray[0]
        }
    }
  }



  return{
    posts,
    loading,
    fetchPostData,
    viewSinglePost,
    post,
    userName
  }
})
