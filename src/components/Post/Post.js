import React from 'react';
import './Post.css';
import { withRouter } from 'react-router-dom';

const Post = (props) => {
    return (
        <div className="post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <h3>{props.author}</h3>
        </div>
    )

}
export default withRouter(Post);