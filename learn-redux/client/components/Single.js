import React from "react"
import Comments from "./Comment";
import Photo from "./Photo"

//import comment
const Single = React.createClass({

    render() {
        const {postId} = this.props.params
        //index of the post
        const i = this.props.posts.findIndex(post => post.code === postId);

        const post = this.props.posts[i];
        const postComment = this.props.comments[postId] || []
        //get us the post
        return (
            <div className="single-photo" >
                <Photo i = {i} post={post} {...this.props} />
                <Comments postComment={postComment} {...this.props}/>
            </div>
        )
    }
})

export default Single