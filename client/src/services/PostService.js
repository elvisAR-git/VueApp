import axios from 'axios'

const url = "http://localhost:3000/api/posts"


class PostService{
    // Get Posts
    static async getPosts(){
        return await (await axios.get(url)).data
    }

    // Create Posts

    static createPost(text){
        return axios.post(url,{
            text
        })
    }

    // Delete Post
    static delPost(id){
        return axios.delete(`${url}${id}`)
    }
    // Get Post
}

export default PostService