import React ,{Component} from 'react';
import {withRouter} from 'react-router-dom';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css';


//This component simply serves to teach programmatic navigation.Here we use history object. 
// Could have been done easily using link navigation.

class GoHome extends Component{

    navigateToHome = () => {
        const{history} = this.props;
        history.push('/');  //History is like stack

    }

    render(){

        const {location} = this.props;
        const whiteBtn = location.pathname=== '/'  // To check if we are at home. 
        return(
            <button 
            className= {`go-home-btn ${whiteBtn? 'white-bkg': 'gradient-bkg'} `} 
            onClick={this.navigateToHome}> 
                <img 
                className='home-icon'  //if we are at home then use white background else gradient background
                src={whiteBtn? homeIconBlack: homeIconWhite} //if we are at home then use black icon , else use white icon 
                alt="home-icon" /> 
            </button>
        );
    }
}

export default withRouter(GoHome);