import React, { useState, useEffect} from 'react'
import './style.css'

import axios from 'axios'

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
        id: 3,
        icon: '',
        name: 'THANH KHOẢN CAO  ',
        decription: 'Tìm hiểu các gói thanh toán linh hoạt của HSC',
        url: ''
    },
    {
        id: 4,
        icon: '',
        name: 'DỄ SỬ DỤNG',
        decription: '3 phút hướng dẫn sử dụng hệ thống HSC Trading',
        url: ''
    },
    {
        id: 5,
        icon: '',
        name: 'MINH BẠCH',
        decription: 'Tìm hiểu về giá trị cốt lõi "Client - centric" tại Hà Nội',
        url: ''
    }
]



function ValuationComponent() {

    const [ dataValue, setValue ] = useState([])

    const fetchData = async () => {
        const result = await axios(
            'http://10.88.127.158:8000/?rest_route=/wp/v2/value'
        );
        console.log(">>>>>>>> result", result)
        setValue(result.data)
    };

    useEffect(() => {
        fetchData();
        console.log(">>>>>>>> data", dataValue)
    }, [])

    return (
        <div className="ValuaCom">
            <div className="container">
                <div className="Title-Value">
                    <h3>Giá trị chúng tôi mang lại</h3>
                </div>
                <div className="row Item">
                    {dataValue.map((item) => {
                        return (
                            <div className="col-md-4 Item-value" key={item.id}>
                                <div className="container">
                                    <h3>Icon</h3>
                                    <h3>{item.title.rendered}</h3>
                                    <p>{item.post_meta_fields.summary[0]}</p>
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