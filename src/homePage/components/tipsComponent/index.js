import React, { useState, useEffect } from 'react'
import './style.css'

import axios from 'axios'

const data = [
    {
        id: 1,
        image: '',
        title: 'Lợi ích của việc phát triển thị trường trái phiếu doanh nghiệp',
        description: 'Aenean eu risus sem. Aliquam ultricies, ligula varius rutrum imperdiet, orci dui tincidunt mauris, sit amet dapibus tellus mi non ante.'
    },
    {
        id: 2,
        image: '',
        title: 'Trái phiếu doanh nghiệp dành cho người mới bắt đầu',
        description: 'Aenean eu risus sem. Aliquam ultricies, ligula varius rutrum imperdiet, orci dui tincidunt mauris, sit amet dapibus tellus mi non ante.'
    },
    {
        id: 3,
        image: '',
        title: 'Hướng dẫn sử dụng hệ thống HSC Bond Trading',
        description: 'Aenean eu risus sem. Aliquam ultricies, ligula varius rutrum imperdiet, orci dui tincidunt mauris, sit amet dapibus tellus mi non ante.'
    },
    {
        id: 4,
        image: '',
        title: 'Lợi ích của việc phát triển thị trường trái phiếu doanh nghiệp',
        description: 'Aenean eu risus sem. Aliquam ultricies, ligula varius rutrum imperdiet, orci dui tincidunt mauris, sit amet dapibus tellus mi non ante.'
    }
]

function TipsComponent() {

    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        const result = await axios(
            'http://10.88.127.158:8000/?rest_route=/wp/v2/posts',
        );
        // console.log(">>> resultarray", result)
        setPosts(result.data);
    };

    useEffect(() => {

        fetchData();
        // console.log(">>> result", posts)
    }, []);


    return (
        <div className="TipsCom">
            <div className="container">
                <div className="Tips-title">
                    <h3>Những điều cần biết</h3>
                    <h3>về trái phiếu doanh nghiệp</h3>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="Tips-left">
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="Tips-right">
                            <div>
                                <h4>Tại sao trái phiếu doanh nghiệp thu hút nhà đầu tư cá nhân</h4>
                            </div>
                            <div className="Tips-text">
                                <p>
                                    Ho Chi Minh city Securities Corporation (HSC) would like to announce the changing of the address and the name of Cho Lon Transaction Office from 22 January 2018.
                            </p>
                            </div>
                            <div className="Tips-text">
                                <p>
                                    Ho Chi Minh city Securities Corporation (HSC) would like to announce the changing of the address and the name of Cho Lon Transaction Office from 22 January 2018.
                            </p>
                            </div>
                            <div className="Tips-btn">
                                <button className="btn btn-primary">Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {posts.map((item) => {
                        return (
                            <div className="col-md-3" key={item.id}>
                                <div className="Tips-post">
                                    <div className="Image-item">
                                    </div>
                                    <h6>{item.title.rendered}</h6>
                                    <p className="Description">{item.excerpt.rendered}</p>
                                </div>
                            </div>
                        )
                    })} 
                </div>

                <div className="All-post">
                    <button className="btn btn-ligth btn-all">Tất cả bài viết</button>
                </div>
            </div>
        </div>
    )
}

export default TipsComponent;