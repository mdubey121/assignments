import {Component} from 'react';
import React from 'react';
import UsersLoading from './usersloading';
class Users extends Component {
	constructor(props){
	super(props);
		this.state={
		 	items:[],
		 	isLoaded:false
		};
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
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
        <h1>Users</h1>
		<UsersLoading isLoaded={this.state.isLoaded} items={this.state.items}/>
        </div>
	)
}

}

export default Users; 

