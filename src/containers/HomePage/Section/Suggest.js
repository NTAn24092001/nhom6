import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class Suggest extends Component {

    render() {
        
        return (
            <div className="section-share section-suggest">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Gợi ý cho chuyến đi sắp tới</span>
                    <br/>    
                    <span className="title-section2">Lên kế hoạch đợi ngày tái xuất!</span>
                    
                </div>
                <div className="section-body">
                <Slider {...this.props.settings}>
       <div className="section-customize">
           <div className="suggest-bg"> 
                   <div className="bg-image section-suggest"/>
           </div>
        <div className="position text-center">
        <h5>Vé Vinpearl Safari Phú Quốc</h5>
         <div className="color-price">VND 490.000</div> 
        </div>
        
       </div>
       <div className="section-customize">
       <div className="suggest-bg"> 
                   <div className="bg-image section-suggest"/>
        </div>
        <div className="position text-center">
        <h5>Vé Vinpearl Safari Phú Quốc</h5>
         <div className="color-price">VND 490.000</div> 
        </div>
       </div>
       <div className="section-customize">
       <div className="suggest-bg"> 
                   <div className="bg-image section-suggest"/>
           </div>
        <div className="position text-center">
        <h5>Vé Vinpearl Safari Phú Quốc</h5>
         <div className="color-price">VND 490.000</div> 
        </div>
       </div>
       <div className="section-customize">
       <div className="suggest-bg"> 
                   <div className="bg-image section-suggest"/>
           </div>
        <div className="position text-center">
        <h5>Vé Vinpearl Safari Phú Quốc</h5>
         <div className="color-price">VND 490.000</div> 
        </div>
       </div>
       <div className="section-customize">
       <div className="suggest-bg"> 
                   <div className="bg-image section-suggest"/>
           </div>
        <div className="position text-center">
        <h5>Vé Vinpearl Safari Phú Quốc</h5>
         <div className="color-price">VND 490.000</div> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Suggest);
