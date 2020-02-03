import {Component} from 'react';
import React from 'react';
import PostsLoading from './postsloading';
class Posts extends Component {
	constructor(props){
	super(props);
		this.state={
		 	items:[],
		 	isLoaded:false
		};
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded:true,
				items: json,
			})
		});
    }
render(){
	return(
       <div>
        <h1>Posts</h1>
		<PostsLoading isLoaded={this.state.isLoaded} items={this.state.items}/>
        </div>
	)
}

}

export default Posts; 

