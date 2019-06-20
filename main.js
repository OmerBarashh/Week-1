function userSide(){

const posts = 
[
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c1", text: "Don't wory second poster, you'll be first one day." },
            { id: "c2", text: "Yeah, believe in yourself!" },
            { id: "c3", text: "Haha second place what a joke." }
        ]
    }
]

function getPosts(text) 
{
    return posts
}

function addPost(textU)
{
    const x = "p" + posts.length
    const comments = []
    const post = {
        text: textU,
        id: x,
        comments: comments
    }
    posts.push(post)
    }
    function removePost(postId) 
    {
        for(let ids of posts){
            if(ids.id === postId)
            {
                posts.splice(parseInt(postId) - 1 , 1)
            }
        }
    }
    function addComment(postId, text)
    {
        let x = 0
        for(let i = 0; i < posts.length; i++){
          x += posts[i].comments.length
        }
        x++
        x = "c" + x
        posts[postId].comments.push({id: x, text: text})
    }
    function removeComment(postId , commentId)
    {
        for(let i = 0; i < posts.length; i++){
            if(posts[i].id === postId){
                const arrOfComm = posts[i].comments
                for(let y = 0; y < arrOfComm.length; y++){
                    if(arrOfComm[y].id === commentId){
                        arrOfComm.splice(y , 1)
                    }
                }
            }
            
        }
    }
    return {
        addComment: addComment,
        removePost: removePost,
        addPost: addPost,
        removeComment: removeComment,
        getPosts: getPosts
    }
}
  
const u = userSide()
u.removeComment("p1" , "c1")
