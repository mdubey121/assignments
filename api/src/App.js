import React, {Component} from 'react';
import "./App.css";
import Loading from "./loading";
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
	return(
		<Loading isLoaded={this.state.isLoaded} items={this.state.items}/>

	)
}

}

export default App; 