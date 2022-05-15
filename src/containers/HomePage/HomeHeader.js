import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        
        return (
            <React.Fragment>
            <div className="home-header-container"> 
            <div className="home-header-content">
                <div className="left-content">
                    <i class="fas fa-bars"></i>
                    <div className="header-logo"></div>
                </div>
                <div className="center-content">
                    <div className="child-content">
                        <div><b>Tải ứng dụng</b></div>
                        <div></div>
                    </div>
                    <div className="child-content">
                    <div><b>Hợp tác với chúng tôi</b></div>
                        <div></div>
                     </div>
                     <div className="child-content">
                     <div><b>Đã lưu</b></div>
                        <div></div>
                      </div>
                     <div className="child-content">
                     <div><b>Đặt chỗ của tôi</b></div>
                        <div></div>
                      </div>
                </div>
                <div className="right-content">
                  
                    <div className="btn-login">Đăng nhập</div>
                    <div className="btn-sign-up">
                    <div className="sign-up">Đăng ký</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="home-header-banner">
                <div className="content-up">
                <div className="title1">DU LỊCH VÀ TRẢI NGHIỆM</div>
                <div className="title2"> THỎA SỨC KHÁM PHÁ VÀ TRẢI NGHIỆM NHỮNG HOẠT ĐỘNG MỚI LẠ</div>
                <div className="search">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Tìm hoạt động và tour trải nghiệm"/>
                </div>
                <div className="title-banner">
                <div className="title3">Xem các hoạt động ở vị trí của bạn </div>
                </div>
                </div>
                <div className="content-down">
                <div className="options">

                    <div className="option-child">
                        <div className="icon-child"><i class="fas fa-map-marker"></i></div>
                        <div className="text-child">Điểm tham quan</div>
                    </div>
                    <div className="option-child">
                        <div className="icon-child"><i class="fas fa-flag"></i></div>
                        <div className="text-child">Tour</div>
                    </div><div className="option-child">
                        <div className="icon-child"><i class="fas fa-bus"></i></div>
                        <div className="text-child">Phương tiện di chuyển</div>
                    </div><div className="option-child">
                        <div className="icon-child"><i class="fas fa-utensils"></i></div>
                        <div className="text-child">Ẩm thực</div>
                    </div><div className="option-child">
                        <div className="icon-child"><i class="fas fa-suitcase"></i></div>
                        <div className="text-child">Tiện ích du lịch</div>
                    </div><div className="option-child">
                        <div className="icon-child"><i class="fas fa-birthday-cake"></i></div>
                        <div className="text-child">Giải trí</div>
                    </div><div className="option-child">
                        <div className="icon-child"><i class="fas fa-play"></i></div>
                        <div className="text-child">Sân chơi</div>
                    </div>




                </div>
                </div>
            </div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
