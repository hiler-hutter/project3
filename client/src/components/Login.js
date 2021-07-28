import React, { Component } from 'react'
import { login } from '../services/auth';

export default class Login extends Component {

	state = {
		username: '',
		password: '',
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
		const { username, password } = this.state;
		login(username, password)
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
					this.props.history.push('/profile');
				}
			})
	}

	render() {
		return (
			<>
				<h2 className="h2-sign">Please fill in this form to Log in</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-login">
						<h3 className="h3-sign">Login with your Account</h3>
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
						<button type="submit" className="but-signup">Login</button>
						{this.state.message && (
						<h3>{this.state.message}</h3>
						)}
					</div>
				</form>
			</>
		)

	}
}
