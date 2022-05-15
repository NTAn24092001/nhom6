import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Category.scss';
import Slider from "react-slick";

import categoryImg from "../../../assets/category/hinhcategory1.webp"

class Category extends Component {

    render() {
    
        // let settings = this.props.settings; kiểm tra hàm settings bên HomePage
        // console.log('check settings : ' , settings)

        return (
           <div className="section-share section-category">
               <div className="section-container">
                   <div className="section-header">
                       <span className="title-section">Khuyến mãi Xperience hiện hành</span>
                       <br/>
                       
                       <span className="title-section2">Tiết kiệm lớn với những ưu đãi đặc biệt giới hạn của chúng tôi</span>
                       
                   </div>
                   <div className="section-body">
                   <Slider {...this.props.settings}>
          <div className="section-customize">
           <div className="bg-image section-category"></div>
          </div>
          <div className="section-customize">
          <div className="bg-image section-category"></div>
           
          </div>
          <div className="section-customize">
          <div className="bg-image section-category"></div>
           
          </div>
          <div className="section-customize">
          <div className="bg-image section-category"></div>
           
          </div>
          <div className="section-customize">
          <div className="bg-image section-category"></div>
            
          </div>
          <div className="section-customize"> 
          <div className="bg-image section-category"></div>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
