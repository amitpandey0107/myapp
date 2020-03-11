import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return(
			<div className="container">
				<div className="row">					
					<div className="col-sm-12">
						<div className="mainwrap">
							<div className="row">
								<div className="col-sm-3">
									<Link to={"/"}><span className="logo">Flat Theme</span></Link>
								</div>	
								<div className="col-sm-9">
									<ul className="mainmenu">
										<li className="menuItem"><Link to={"/"}>Home</Link></li>
										<li className="menuItem"><Link to={"/about"}>About</Link></li>
										<li className="menuItem"><Link to={"/contact"}>contact</Link></li>
										<li className="menuItem"><Link to={"/article"}>Article</Link></li>
										<li className="menuItem"><Link to={"/support"}>Support</Link></li>
										<li className="menuItem"><Link to={"/press"}>Press</Link></li>
									</ul>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;