import React from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import Counter from '../Counter/Counter';
// import PostData from '../../components/PostData';
import { Route, Link } from 'react-router-dom';

class Blog extends React.Component {
    state = {
        title: '',
        content: '',
        author: '',
        results: []
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="Blog">
                <div className="header">
                    <nav>
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={{
                            pathname: "/new-post",
                            hash: ""
                        }}>New Post</Link></li>
                        </ul>
                    </nav>
                </div> 
                <Counter />
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
                <Route path="/post/:id" component={FullPost}/>
            </div>
        )
    }
}

export default Blog;