import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class TravelTips extends Component {

    render() {
        
        return (
            <div className="section-share section-travel-tip">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Bí kíp du lịch</span>
                    <br/>    
                    <span className="title-section2">Chơi - ăn - ở như người địa phương</span>
                    
                </div>
                <div className="section-body">
                <Slider {...this.props.settings}>
       <div className="section-customize">
           <div className="around-bg"> 
                   <div className="bg-image section-travel-tip"/>
           </div>
        <div className="position text-center">
        <h5>Review Sapa: Lịch trình cho những ai lần đầu đến thành phố trong sương</h5>
         {/* <div className="color-price">VND 1.677.000</div>  */}
        </div>
        
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-travel-tip"/>
        </div>
        <div className="position text-center">
        <h5>Review Sapa: Lịch trình cho những ai lần đầu đến thành phố trong sương</h5>
         {/* <div className="color-price">VND 1.677.000</div>  */}
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-travel-tip"/>
           </div>
        <div className="position text-center">
        <h5>Review Sapa: Lịch trình cho những ai lần đầu đến thành phố trong sương</h5>
         {/* <div className="color-price">VND 1.677.000</div>  */}
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-travel-tip"/>
           </div>
        <div className="position text-center">
        <h5>Review Sapa: Lịch trình cho những ai lần đầu đến thành phố trong sương</h5>
         {/* <div className="color-price">VND 1.677.000</div>  */}
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-travel-tip"/>
           </div>
        <div className="position text-center">
        <h5>Review Sapa: Lịch trình cho những ai lần đầu đến thành phố trong sương</h5>
         {/* <div className="color-price">VND 1.677.000</div>  */}
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

export default connect(mapStateToProps, mapDispatchToProps)(TravelTips);
