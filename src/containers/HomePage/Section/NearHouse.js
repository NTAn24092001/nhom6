import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class NearHouse extends Component {

    render() {
        
        return (
            <div className="section-share section-near-house">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Khám phá các hoạt động gần nhà</span>
                    <br/>    
                    <span className="title-section2">Yên tâm trải nghiệm.</span>
                    
                </div>
                <div className="section-body">
                <Slider {...this.props.settings}>
       <div className="section-customize">
           <div className="near-house-bg"> 
                   <div className="bg-image section-near-house"/>
           </div>
        <div className="position text-center">
        <h5>Voucher bữa ăn tại East West Brewing Co.</h5>
         <div className="color-price">VND 660.000</div> 
        </div>
        
       </div>
       <div className="section-customize">
       <div className="near-house-bg"> 
                   <div className="bg-image section-near-house"/>
        </div>
        <div className="position text-center">
        <h5>Voucher bữa ăn tại East West Brewing Co.</h5>
         <div className="color-price">VND 660.000</div> 
        </div>
       </div>
       <div className="section-customize">
       <div className="near-house-bg"> 
                   <div className="bg-image section-near-house"/>
           </div>
        <div className="position text-center">
        <h5>Voucher bữa ăn tại East West Brewing Co.</h5>
         <div className="color-price">VND 660.000</div> 
        </div>
       </div>
       <div className="section-customize">
       <div className="near-house-bg"> 
                   <div className="bg-image section-near-house"/>
           </div>
        <div className="position text-center">
        <h5>Voucher bữa ăn tại East West Brewing Co.</h5>
         <div className="color-price">VND 660.000</div> 
        </div>
       </div>
       <div className="section-customize">
       <div className="near-house-bg"> 
                   <div className="bg-image section-near-house"/>
           </div>
        <div className="position text-center">
        <h5>Voucher bữa ăn tại East West Brewing Co.</h5>
         <div className="color-price">VND 660.000</div> 
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

export default connect(mapStateToProps, mapDispatchToProps)(NearHouse);
