import React, { Component } from 'react';
import { connect } from 'react-redux';


class About extends Component {

    render() {
        
        return (
            <div className="section-share section-about">
            <div className="section-about-header">
                Các trải nghiệm và điểm đến được yêu thích !
            </div>
            <div className="section-about-content">
                   <div className="content-left">
                   <iframe width="100%" height="400" 
                   src="https://www.youtube.com/embed/UDfTSfNisCY" 
                   title="YouTube video player" 
                   frameborder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowfullscreen></iframe>
                   </div>
                   <div className="content-right">
                       <p>
                       Phú Quốc – Hòn đảo ngọc thu hút hàng triệu lượt khách du lịch mỗi năm có rất nhiều điều thú vị đang chờ đón mọi người đến tham quan, khám phá.Thuộc địa phận tỉnh Kiên Giang, nằm trong vịnh Thái Lan, đảo Phú Quốc từ lâu đã nổi tiếng với du khách từ mọi miền đất nước và cả khách du lịch quốc tế. Không chỉ là hòn đảo xinh đẹp với phong cảnh thiên nhiên yên bình, hoang sơ, khí hậu thuận lợi cho hoạt động vui chơi, nghỉ dưỡng, Phú Quốc còn là điểm đến lý tưởng cho nhiều hoạt động khám phá thiên nhiên kỳ thú.Hòn đảo ngọc sở hữu nhiều bãi biển đẹp trải dài từ Bắc đảo tới Nam đảo, 99 ngọn núi, đồi và khu rừng nguyên sinh phong phú hệ động thực vật. Tại Bắc đảo Phú Quốc, . Cùng trải nghiệm vói traveloka ở đây nhé! 
                       </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
