import React, {Component} from 'react';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import { connect } from 'react-redux';
import { LOADING, SUCCESS, ERROR } from '../constants/misc.js';
import { get_list_action } from '../actions/get_list_action.js';

class Home extends Component {

	constructor(props) {
		super(props);
			this.state = {
			allFarmData: [],
			key: '',
			dialogVisible: true,
			isLodaing:false,
		}
	}

	componentDidMount() {
		this.props.get_list_action();
	}


	static getDerivedStateFromProps(props, state) {		
		if (props.get_list_reducers.status === LOADING) {			
			return { isLodaing: true }
		} else if (props.get_list_reducers.status === SUCCESS) {			
			var allfarm = [];			
			props.get_list_reducers.value.data.map((item, index) => {
				allfarm.push({
					id: item.id,
					name: item.name,
					username: item.username,
					email: item.email,
					street: item.address.street,
					suite: item.address.suite,
					city: item.address.city,
					zipcode: item.address.zipcode,
					phone: item.phone,
					website: item.website,
					company: item.company.name,
					
				})
			})			
			return {allFarmData:allfarm ,isLodaing: false };
		} else if (props.get_list_reducers.status === ERROR) {
			return { isLodaing: false, waitingIndicator: false };
		} 
		return null;

  	}


	render() {
		console.log('==========================');
		console.log(this.state.allFarmData);
		console.log('==========================');
		return(
			<div className="main">
				<Header/>
				<div className="contactWrap">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<h1>Home Page</h1>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}


const mapStateToProps = state => {
  return {
    get_list_reducers: state.get_list_reducers,  
  };
};

export default connect(mapStateToProps, { get_list_action })(Home);