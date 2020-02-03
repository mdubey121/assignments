import React, {Component} from 'react';
import "./App.css";
class UsersLoading extends Component
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
									<th>Id</th>
								    <th>Name</th>
								    <th>Email</th>
								    <th>Username</th>
								    <th>Address</th>
								    <th>geo</th>
								    <th>Phone</th>
								    <th>wapsite</th>
								    <th>company</th>
								    </tr>
			
			                        {this.props.items.map(items =>(
									<tr>
									<td>{items.id}</td>
								    <td>{items.name}</td>
								    <td>{items.email}</td>
								    <td>{items.username}</td>
								    <td><b>street</b>- {items.address.street} ,<b>suite</b>- {items.address.suite}, <b>city</b>-     	{items.address.city} ,<b>zipcode</b>- {items.address.zipcode}</td>
								    <td><b>lat</b>- {items.address.geo.lat} ,<b>lng</b>- {items.address.geo.lng}</td>
								    <td>{items.phone}</td>
								    <td>{items.website}</td>
								    <td><b>company</b>- {items.company.name},<b>catchphrase</b>- {items.company.catchPhrase},<b>bs</b>- {items.company.bs}</td>
									</tr>
                                ))};	
                            </table>
                           </div>  
			            );
	                }
	        }
}

export default UsersLoading;
