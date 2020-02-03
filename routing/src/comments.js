import {Component} from 'react';
import React from 'react';
import CommentsLoading from './commentsloading';
class Comments extends Component {  
	constructor(props){
	super(props);
		this.state={
		 	items:[],
		 	isLoaded:false
		};
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/comments')
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
        <h1>Comments</h1>
		<CommentsLoading isLoaded={this.state.isLoaded} items={this.state.items}/>
        </div>
	)
}

}

export default Comments; 

