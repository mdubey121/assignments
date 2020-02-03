import React, {Component} from 'react';
import "./App.css";
class CommentsLoading extends Component
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
									<th>PostId</th>
								    <th>Id</th>
								    <th>Name</th>
								    <th>Email</th>
								    <th>Body</th>
								    
								    </tr>
			
			                        {this.props.items.map((items) =>(
									<tr>
									<td>{items.postId}</td>
								    <td>{items.id}</td>
								    <td>{items.name}</td>
								    <td>{items.email}</td>
								    <td>{items.body} </td>
								    
									</tr>
                                ))};	
                            </table>
                           </div>  
			            );
	                }
	        }
}

export default CommentsLoading;
