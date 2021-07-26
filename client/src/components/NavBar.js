import React from 'react'
import {Link} from 'react-router-dom';

export default function NavBar(props){

    return(
        
        <nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>


				{props.user ? (
					<>
						<li>
							<Link to='/projects'>Projects</Link>
						</li>
						{/* <li>
							<Link to='/' onClick={() => handleLogout()}>Logout</Link>
						</li> */}
					</>
				) : (
					<>
						<li>
							<Link to='/signup'>Signup</Link>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
					</>
				)} 
			</ul>
		</nav>
    )
}

