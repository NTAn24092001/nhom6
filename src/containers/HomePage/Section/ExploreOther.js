import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExploreOther.scss';
import Slider from "react-slick";

class ExploreOther extends Component {

    render() {
        
        return (
            <div className="section-share section-explore">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Khám phá địa điểm khác</span>
                    {/* <br/>
                    
                    <span className="title-section2">Tiết kiệm lớn với những ưu đãi đặc biệt giới hạn của chúng tôi</span> */}
                    
                </div>
                <div className="section-body">
                <Slider {...this.props.settings}>
       <div className="section-customize">
       <div className="position text-center">
       <div className="bg-image section-explore"></div>
        <h4>Phú Quốc</h4>
        </div>
        
       </div>
       <div className="section-customize">
       <div className="position text-center">
       <div className="bg-image section-explore"></div>
        <h4>Phú Quốc</h4>
        </div>
        
       </div>
       <div className="section-customize">
       <div className="position text-center">
       <div className="bg-image section-explore"></div>
        <h4>Phú Quốc</h4>
        </div>
        
       </div>
       <div className="section-customize">
       <div className="position text-center">
       <div className="bg-image section-explore"></div>
        <h4>Phú Quốc</h4>
        </div>
        
       </div>
       <div className="section-customize">
       <div className="position text-center">
       <div className="bg-image section-explore"></div>
        <h4>Phú Quốc</h4>
        </div>
         
       </div>
       <div className="section-customize"> 
       <div className="position text-center">
       <div className="bg-image section-explore"></div>
        <h4>Phú Quốc</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExploreOther);
