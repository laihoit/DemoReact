import React from 'react'
import './style.css'

function BondsComponent() {
    return (
        <div className="Bonds">
            <div className="row">
                <div className="col-md-6 Bonds-left">
                    <div className="container">
                        <div className="content-left">
                            <div className="Bonds-title">
                                <h3>Trái phiếu Vietjet Air</h3>
                            </div>
                            <div className="list-content">
                                <div className="col-md-3 Bonds-type">
                                    <p>Lãi xuất lên đến</p>
                                    <div className="Number-bonds">
                                        <span>9.0</span><span className="Persent">%</span>
                                    </div>
                                    <p>Mỗi năm</p>
                                </div>
                                <div className="col-md-3 Bonds-type">
                                    <p>Kỳ hạn còn lại</p>
                                    <div className="Number-bonds">
                                        <span>24</span>
                                    </div>
                                    <p>Tháng</p>
                                </div>
                                <div className="col-md-4 Bonds-type">
                                    <p>Thanh khoản linh hoạt</p>
                                    <span className="Persent">Có thể bán mỗi ngày</span>

                                </div>
                            </div>
                            <div className="Bonds-text">
                                <p>
                                    Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...
                            </p>
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

                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-md-6 Bonds-right">

                </div>
            </div>
        </div>
    )
}

export default BondsComponent;