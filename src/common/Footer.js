import React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return(
			<div className="container">
				<div className="row">					
					<div className="col-sm-12">
						<div className="footerWrap">
							<div className="row">
								<div className="col-sm-12 text-center">
									<Link to={"/"}><span className="flogo">Flat Theme</span></Link>
								</div>	
								<div className="col-sm-12">
									<ul className="mainmenu footerMenu">
										<li className="menuItem"><Link to={"/"}>Home</Link></li>
										<li className="menuItem"><Link to={"/about"}>About</Link></li>
										<li className="menuItem"><Link to={"/contact"}>contact</Link></li>
										<li className="menuItem"><Link to={"/article"}>Article</Link></li>
										<li className="menuItem"><Link to={"/support"}>Support</Link></li>
										<li className="menuItem"><Link to={"/press"}>Press</Link></li>
									</ul>
								</div>	
								<div className="col-sm-12">
									<div className="copyright">&copy; 2020 Flat Theme | Designed By Amit | All right reserved.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;