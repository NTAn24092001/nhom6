import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Category from './Section/Category';
import ExploreOther from './Section/ExploreOther';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AroundWorld from './Section/AroundWorld';
import SafeTravel from './Section/SafeTravel';
import NearHouse from './Section/NearHouse';
import Suggest from './Section/Suggest';
import LocalDestination from './Section/LocalDestination';
import TravelTips from './Section/TravelTips';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import { set } from 'lodash';


class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1 ,    
          };
        return (
            <div> 
                <HomeHeader/>
                <Category     settings={settings} />
                <ExploreOther settings={settings}/>
                <AroundWorld settings={settings} />
                <SafeTravel settings={settings} />
                <NearHouse settings={settings} />
                <Suggest settings={settings} />
                <LocalDestination settings={settings} />
                <TravelTips settings={settings} />
                <About/>
                <HomeFooter/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
