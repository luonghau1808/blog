import { reactive } from 'vue'

const state = reactive({
  posts: [
    {
      id: 1,
      user: { id: 1, name: 'Nguyen', avatar: '/src/assets/avatars/avatar1.svg' },
      images: ['/src/assets/avatars/avatar1.svg'],
      caption: 'Một ngày đẹp trời!',
      likes: 12,
      likedByUser: false,
      comments: [{ user: 'An', text: 'Đẹp quá!' }]
    },
    {
      id: 2,
      user: { id: 2, name: 'Pham', avatar: '/src/assets/avatars/avatar2.svg' },
      images: [],
      caption: 'Cuộc sống là những chuyến đi',
      likes: 58,
      likedByUser: false,
      comments: [{ user: 'Lan', text: 'Tuyệt vời' }]
    }
  ]
})

export function usePosts() {
  function toggleLike(postId) {
    const p = state.posts.find(p => p.id === postId)
    if (!p) return
    p.likedByUser = !p.likedByUser
    p.likes += p.likedByUser ? 1 : -1
  }

  function addComment(postId, comment) {
    const p = state.posts.find(p => p.id === postId)
    if (!p) return
    p.comments = [...p.comments, comment]
  }

  function getPost(id) {
    return state.posts.find(p => p.id === Number(id))
  }

  return { posts: state.posts, toggleLike, addComment, getPost }
}
