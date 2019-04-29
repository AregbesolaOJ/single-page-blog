import React from 'react';
import './Posts.css';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Posts extends React.Component {
    state = {
        selectedPostId: '',
    }

    postViewHandler = (id) => {
        console.log(id)
        this.setState({ selectedPostId: id })
        // this.props.history.push('/full-post');
    }

    componentDidMount () {
        console.log(this.props.res);
    }

    render () {
        const blogPosts = this.props.res;
        const posts = blogPosts.map(post => (
            <Link key={post.Id} to={"/post/" + post.Id} >
                <Post
                    title={post.Title}
                    author={post.Author}
                    content={post.Body}
                    clicked={() => this.props.postOnLoad(post.Id)}
                />            
            </Link>
        ));
        return (
            <React.Fragment>
                <div className="posts">
                    {posts}
                </div>
                <div className="p">Please select a post</div>
                {/* <Route path="/posts/" exact component={FullPost}/> */}
            </React.Fragment>
        )    
    }
}

const mapStateToProps = state => {
    return {
        res: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postOnLoad: (id) => dispatch({type: "SELECTED_POST", postId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);