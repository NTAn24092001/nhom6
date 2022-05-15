import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class SafeTravel extends Component {

    render() {
        
        return (
            <div className="section-share section-safe-travel">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Bí kíp du lịch an toàn hậu Covid</span>
                    {/* <br/>    
                    <span className="title-section2">Các điểm tham quan giải trí quốc tế được yêu thích</span> */}
                    
                </div>
                <div className="section-body">
                <Slider {...this.props.settings}>
       <div className="section-customize">
           <div className="around-bg"> 
                   <div className="bg-image section-safe-travel"/>
           </div>
        <div className="position text-center">
        <h4>TP.HCM</h4>
        {/* <div className="color-price">VND 1.677.000</div> */}
        </div>
        
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-safe-travel"/>
        </div>
        <div className="position text-center">
        <h4>TP.HCM</h4>
        {/* <div className="color-price">VND 1.677.000</div> */}
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-safe-travel"/>
           </div>
        <div className="position text-center">
        <h4>TP.HCM</h4>
        {/* <div className="color-price">VND 1.677.000</div> */}
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-safe-travel"/>
           </div>
        <div className="position text-center">
        <h4>TP.HCM</h4>
        {/* <div className="color-price">VND 1.677.000</div> */}
        </div>
       </div>
       <div className="section-customize">
       <div className="around-bg"> 
                   <div className="bg-image section-safe-travel"/>
           </div>
        <div className="position text-center">
        <h4>TP.HCM</h4>
        {/* <div className="color-price">VND 1.677.000</div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SafeTravel);
