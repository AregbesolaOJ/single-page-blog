import React from 'react';
import './FullPost.css';
import { connect } from 'react-redux';

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render () {
        const fullPost = {...this.props.post};    
        return (
            <div className="full-post">
                <h1>{fullPost.Title}</h1>
                <p>{fullPost.Body}</p>
                <p>{fullPost.Author} (2019)</p>
            </div>
        )    
    }
}

const mapStateToProps = state => {
    return {
        post: state.selectedPost[0]
    };
};

export default connect(mapStateToProps)(FullPost);