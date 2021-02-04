import React from "react";
import { Card, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';


const My = () => {
    return (
        <div>
            <Card
                style={{width: 'calc(100% - 16px)', margin: 8, textAlign: 'center'}}
                title={(
                    <Avatar
                        size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                        icon={<AntDesignOutlined />}
                    />
                )}>
                <p>书山有路勤为径</p>
                <p>学海无涯苦作舟</p>
            </Card>
        </div>
    )
}

export default My
