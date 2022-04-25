import React from "react";
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import comments from "../data/comments";

const Photo = React.createClass({
    render(){
        const {post, i , comment } = this.props
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </Link>
                    <ReactCSSTransitionGroup 
                    transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                        <span key={post.likes} className="like-heart">
                            {post.likes}
                        </span>
                    </ReactCSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-button">
                        <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts;{post.likes}</button>
                        <Link to={`/view/${post.code}`}>
                            <span className="speech-bubble"></span>
                            {comments[post.code] ? comments[post.code].length :  0}
                        </Link>
                    </div>
                </figcaption>
            </figure>
        ) 
    }
})

export default Photo