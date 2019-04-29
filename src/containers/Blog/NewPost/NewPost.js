import React from 'react';
import './NewPost.css';
import { connect } from 'react-redux';

class NewPost extends React.Component {
    state = {
        title: '',
        content: '',
        author: '',
        isBlank: false
    }

    inputChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    newPostHandler = event => {
        event.preventDefault();

        if (this.state.title === "" || this.state.content === "" || this.state.author === "") {
            this.setState({ isBlank: true })

            setTimeout(() => {
                this.setState({ isBlank: false})
            }, 3000);
        } else {
            const formData = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.author
            }
            console.log(formData);    
            alert('Your Post has been added successfully');
            this.props.history.push('/');
        }
    }

    render() {
        const show = {
            textAlign: "center",
            display: "block",
            fontWeight: "bold",
            fontStyle: "italic",
            color: "firebrick",
            fontSize: "12px"
        }
        const hide = {
            display: "none"
        }

        return (
            <div className="new-post">
                <h1>Add a post</h1>
                <form onSubmit={() => this.props.newPostHandler(this.state.title, this.state.content, this.state.author)}> 
                    <p>title</p>
                    <input type="text" name="title" value={this.props.title} onChange={this.inputChangeHandler}/>
    
                    <p>content</p>
                    <input type="text" name="content" value={this.props.content} onChange={this.inputChangeHandler}/>
    
                    <p>author</p>
                    <input type="text" name="author" value={this.props.author} onChange={this.inputChangeHandler}/>
    
                    <br />
                    <button onClick={this.newPostHandler}>Add post</button>
                    <p style={this.state.isBlank ? show : hide}>Oops! You have an empty field!</p>
                </form>
            </div>
        )    
    }
}

const newPost = new NewPost();

if (newPost.state.title !== "" && newPost.state.content !== "" && newPost.state.author !== "") {
};
const mapDispatchToProps = dispatch => {
    return {
        newP: () => dispatch({type: 'ADD_NEW', payload: 100}),            
        newPostHandler: (title, content, author) => dispatch({type: 'ADD_NEW_POST', payload: {title, content, author}})            
    }
};

export default connect(null, mapDispatchToProps)(NewPost);
