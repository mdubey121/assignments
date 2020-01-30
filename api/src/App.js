import React, {Component} from 'react';
import "./App.css";
class App extends Component {
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

 var{ isLoaded, items } = this.state;
 
 if(!isLoaded){
 	return <div>Loading....</div>
 }
 
 else{
		   return(
		 	<div className="App">
		 	  	<div className="customers">

                      			
							<tr>
						    <th>Name</th>
						    <th>Email</th>
						    <th>Username</th>
						    </tr>
	
	                    {items.map(items =>(
							<tr>
						    <td>{items.name}</td>
						    <td>{items.email}</td>
						    <td>{items.username}</td>
							</tr>
                            
                            ))};
	 	  	
		 	  	</div>	  	
		 	   
		 	</div>

		      );

          }
       }
   }

export default App; 
