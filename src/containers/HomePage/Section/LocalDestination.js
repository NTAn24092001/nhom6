import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick";

import categoryImg from "../../../assets/category/hinhcategory1.webp"

class LocalDestination extends Component {

    render() {
    
        // let settings = this.props.settings; kiểm tra hàm settings bên HomePage
        // console.log('check settings : ' , settings)

        return (
           <div className="section-share section-local">
               <div className="section-container">
                   <div className="section-header">
                       <span className="title-section">Điểm đến địa phương</span>
                       <br/>
                       
                       <span className="title-section2">Bạn đã sẵn sàng khám phá những địa điểm tốt nhất cùng chúng tôi?</span>
                       
                   </div>
                   <div className="section-body">
                   <Slider {...this.props.settings}>
          <div className="section-customize">
           <div className="bg-image section-local"></div>
          </div>
          <div className="section-customize">
          <div className="bg-image section-local"></div>
           
          </div>
          <div className="section-customize">
          <div className="bg-image section-local"></div>
           
          </div>
          <div className="section-customize">
          <div className="bg-image section-local"></div>
           
          </div>
          <div className="section-customize">
          <div className="bg-image section-local"></div>
            
          </div>
          <div className="section-customize"> 
          <div className="bg-image section-local"></div>
            
          </div>
        </Slider>
                   </div>
         
               </div>    
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

export default connect(mapStateToProps, mapDispatchToProps)(LocalDestination);
