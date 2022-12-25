import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import homeAnime from '../../assets/home_anime.gif';
import Modal from '../Modal/Modal';
import './Home.css';

class Home extends Component{

    state = {showModal:false};


    componentDidMount() {   //life cycle method
        setTimeout(() => {
            this.setState({showModal: true});
        }, 1000);
    }

    closeModal = () => {
        this.setState({showModal: false});
    };

    render(){
        return(
            <div className='home-container'>
                {this.state.showModal && <Modal closeModal={this.closeModal} />} 
                {/* modal is loaded if showmodal is true */}
                <div className='header-text'>
                    <h1>Hey there! Welcome to my portfolio!</h1>
                    <p>I am Ameerul, an SRE currently working at Nutanix. I am always looking to solve problems by synergizing the power of technology and management to create inclusive, impactful products.</p>
                </div>
 
                <div className='head-btns'>
                    <Link to="/about" className='btn btn-white'>
                        <p className='btn-text'>Know more about me</p>
                    </Link>

                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>

                <div className='splash-image'> 
                    <img src={homeAnime} alt='animation' className='home-anime' />
                </div>
            </div>
        );
    }
}


export default Home;

