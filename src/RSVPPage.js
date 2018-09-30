import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/DetailsPage.css';

export default class RSVPPage extends Component {

	state = {
		name: undefined
	}

	onButtonClick = (yes) => {
		const { name } = this.state;
		if (!name) {
			window.alert('Please fill in your name');
		} else {
			let emailContent = yes ? `subject=${name} will be attending&body=Hi%0D%0A%0D%0AI will be attending the wedding.%0D%0A%0D%0ARegards ${name}` :
				`subject=${name} won't be attending&body=Hi%0D%0A%0D%0AI won't be attending the wedding.%0D%0A%0D%0ARegards ${name}`

			window.open(`mailto:lilyandRob2018@gmail.com?${emailContent}`, '_blank');
		}

	}

	onChange = (e) => {
		e.preventDefault();
		this.setState({ name: e.target.value });
	}
	render() {
		const { name } = this.state;
		return (
			<div>
        <form onSubmit={this.handleSubmit}>
        <div>
      <input type="text" value={name} onChange={this.onChange} placeholder='Please state your name'/>
        </div>
       <button onClick={()=> this.onButtonClick(true)} className="centered-header" >Yes</button>
       <button onClick={()=> this.onButtonClick(false)} className="centered-header" >No</button>
      </form>
      </div>
		);
	}
}