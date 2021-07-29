import React, { Component } from 'react'
import { signup } from '../services/auth';

export default class Signup extends Component {

	state = {
		username: '',
		password: '',
		country: '',
		city: '',
		message: ''
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		const { username, password, country, city } = this.state;
		signup(username, password, country, city)
			.then(response => {
				if (response.message) {
					this.setState({
						message: response.message,
						username: '',
						password: ''
						
					})
				} else {
					// user is correctly signed up in the backend
					// -> we want to add the user also in the state of App.js
					this.props.setUser(response);
					// redirect to /projects
					this.props.history.push('/login');
				}
			})
	}

	render() {
		return (
			<>
				<h2 className="h2-sign">Please fill in this form to create an account</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-signup">
						<h3 className="h3-sign">Signup Form</h3>
						<label htmlFor="username">Username: </label>
							<input className="controls"
							type="text"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/><br></br>
						<label htmlFor="password">Password: </label>
							<input className="controls"
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
						/><br></br>
						<button type="submit" className="but-signup">Signup</button>
						{this.state.message && (
						<h3>{this.state.message}</h3>
						)}
					</div>
				</form>
			</>
		)

	}
}
