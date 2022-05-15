import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class AroundWorld extends Component {

    render() {
        
        return (
            <div className="section-share section-around-world">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Vòng quanh thế giới</span>
                    <br/>    
                    <span className="title-section2">Các điểm tham quan giải trí quốc tế được yêu thích</span>
                    
                </div>
                <div className="section-body">
                <Slider {...this.props.settings}>
       <div className="section-customize">
           <div className="around-bg"> 
                   <div className="bg-image section-around-world"/>
           </div>
        <div className="position text-center">
        <h4>Vé Universal Studios Singapore</h4>
         <div className="color-price">VND 1.677.000</div> 
        </div>
        
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-around-world"/>
        </div>
        <div className="position text-center">
        <h4>Vé Universal Studios Singapore</h4>
        <div className="color-price">VND 1.677.000</div>
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-around-world"/>
           </div>
        <div className="position text-center">
        <h4>Vé Universal Studios Singapore</h4>
        <div className="color-price" >VND 1.677.000</div>
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-around-world"/>
           </div>
        <div className="position text-center">
        <h4>Vé Universal Studios Singapore</h4>
        <div className="color-price" >VND 1.677.000</div>
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-around-world"/>
           </div>
        <div className="position text-center">
        <h4>Vé Universal Studios Singapore</h4>
        <div className="color-price" >VND 1.677.000</div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AroundWorld);
