import React, {Component} from 'react';
import "./App.css";
class PostsLoading extends Component
{
	constructor(props){
		super(props);
		var isLoaded = this.props.isLoaded;
		var items = this.props.items;
	}
	render(){
	 			if(!this.props.isLoaded){
	 			return <div>Loading....</div>
	 			}
	 
	 				else{
			   			return(
				 				<div className="App">
				 	  	    	<table id="customers">

									<tr>
									<th>userId</th>
								    <th>id</th>
								    <th>title</th>
								    <th>body</th>
								    </tr>
			
			                        {this.props.items.map(items =>(
									<tr>
									<td>{items.userId}</td>
								    <td>{items.id}</td>
								    <td>{items.title}</td>
								    <td>{items.body}</td>
									</tr>
                                ))};	
                               </table>
                              </div>  
			                );
	                   }
	        }
}

export default PostsLoading;
