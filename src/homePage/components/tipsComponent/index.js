import React from 'react'
import './style.css'

function TipsComponent() {
    return (
        <div className="TipsCom">
            <div className="container">
                <div className="Tips-title">
                    <h3>Những điều cần biết về trái phiếu doanh nghiệp</h3>
                </div>
                <div className="row">
                    <div className="col-md-6">

                    </div>

                    <div className="col-md-6">
                        <div>
                            <h4>Tại sao trái phiếu doanh nghiệp thu hút nhà đầu tư cá nhân</h4>
                        </div>
                        <div className="Bonds-text">
                            <p>
                                Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...
                            </p>
                        </div>
                        <div className="Bonds-btn">
                            <button className="btn btn-light">Tìm hiểu thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TipsComponent;