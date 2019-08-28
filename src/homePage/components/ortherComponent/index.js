import React, { useState, useEffect } from 'react'
import './style.css'

import axios from 'axios'

const dataOrther = [
    {
        id: 1,
        pathImage: '',
        name: 'Mở tài khoản',
        description: 'Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...'
    },
    {
        id: 2,
        pathImage: '',
        name: 'Lựa chọn trái phiếu và gói thanh toán',
        description: 'Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...'
    },
    {
        id: 3,
        pathImage: '',
        name: 'Đặt lệnh',
        description: 'Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...'
    },
    {
        id: 4,
        pathImage: '',
        name: 'Nhận xác nhận sở hữu trái phiếu',
        description: 'Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...'
    }
]

function OrtherComponent() {

    const [ stepsData, setSteps] = useState([])

    const fetchData = async () => {
        const result = await axios(
            'http://10.88.127.158:8000/?rest_route=/wp/v2/steps'
        );

        setSteps(result.data)
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="ortherCom">
            <div className="InfoCom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 Orther-title">
                            <h1>Triết lý "Khách hàng là trung tâm" tại HSC</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="orther-text">
                                <p>
                                    Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...
                            </p>
                            </div>

                            <div className="orther-text">
                                <p>
                                    Năm 2018, Vietjet tiếp tục giữ vị thế đứng đầu trên thị trường nội địa với thị phần 46%. Tại thị trường nước ngoài, Vietjet dẫn đầu số lượng chuyến bay và số khách vận chuyển đi và đến các thị trường trọng yếu và có mức tiêu dùng cao ở Châu Á như Hàn Quốc, Đài Loan, Trung Quốc, ...
                            </p>
                            </div>
                            <div className="Bonds-btn">
                                <button className="btn btn-primary">Tìm hiểu thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="StepsCom">
                <div className="container">
                    <div className="Step-title">
                        <h1>4 Bước Đơn Giản Để Đầu Tư</h1>
                        <p>Follow these 4 simple steps to us now</p>
                    </div>
                    <div className="row">
                        {stepsData.map((item) => {
                            return (
                                <div className="col-md-3 ItemPost" key={item.id}>
                                    <div className="Image-item">
                                    </div>
                                    <h3>{item.title.rendered}</h3>
                                    <p>{item.excerpt.rendered}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrtherComponent;