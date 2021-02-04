import React, { useEffect, useState } from "react";
import { List, Skeleton } from 'antd';
import http from '../../utils/http'

import './index.less'

const Home = () => {
    const [list, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        http.get('juhe/toutiao/index',
            {
                params: {
                    key: 'c03e664bff3b924eb1210d871182158a',
                    type: 'top'
                }
            }).then(res => {
            console.log(res, 1)
            setData(res.result.data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <Skeleton loading={loading}
                      active
                      className={'skeleton'}>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={list}
                    footer={
                        list?.length && <div style={{textAlign: 'center'}}>
                            到底了....
                        </div>
                    }
                    renderItem={item => (
                        <a href={item.url}>
                            <List.Item
                                key={item.uniquekey}
                                extra={
                                    !loading && (<img
                                        width={272}
                                        alt="logo"
                                        src={item.thumbnail_pic_s}
                                    />)
                                }
                            >
                                {item.title}
                            </List.Item>
                        </a>
                    )}
                />
            </Skeleton>
        </div>
    )
}

export default Home
