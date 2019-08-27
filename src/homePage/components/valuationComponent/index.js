import React from 'react'
import './style.css'

const data = [
    {
        id: 1,
        icon: '',
        name: 'AN TOÀN',
        decription: 'Tìm hiểu về quy trình thẩm định và tư vấn phát hành trái phiếu của HSC',
        url: ''
    },
    {
        id: 2,
        icon: '',
        name: 'LỢI XUẤT HẤP DẪN',
        decription: 'Danh sách các trái phiếu đang chào bán',
        url: ''
    },
    {
        id: 1,
        icon: '',
        name: 'THANH KHOẢN CAO  ',
        decription: 'Tìm hiểu các gói thanh toán linh hoạt của HSC',
        url: ''
    },
    {
        id: 1,
        icon: '',
        name: 'DỄ SỬ DỤNG',
        decription: '3 phút hướng dẫn sử dụng hệ thống HSC Trading',
        url: ''
    },
    {
        id: 1,
        icon: '',
        name: 'MINH BẠCH',
        decription: 'Tìm hiểu về giá trị cốt lõi "Client - centric" tại Hà Nội',
        url: ''
    }
]



function ValuationComponent() {

    return (
        <div className="ValuaCom">
            <div className="container">
                <div className="Title-Value">
                    <h3>Giá trị chúng tôi mang lại</h3>
                </div>
                <div className="row Item">
                    {data.map((item) => {
                        return (
                            <div className="col-md-4 Item-value">
                                <div className="container">
                                    <h3>Icon</h3>
                                    <h3>{item.name}</h3>
                                    <p>{item.decription}</p>
                                    <a>Chi tiết</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ValuationComponent;