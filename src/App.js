import React  from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import Home from './pages/home'
import My from './pages/my'

import './App.less';

const {TabPane} = Tabs;

const PAGES = [
    {
        page: 'home',
        name: '首页',
        component: Home
    }, {
        page: 'my',
        name: '我的',
        component: My
    },
]


const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({style}) => (
            <DefaultTabBar {...props} className="site-custom-tab-bar" style={{...style}} />
        )}
    </Sticky>
);


const App = () => {

    return (
        <div className="App">
            <StickyContainer>
                <Tabs defaultActiveKey={PAGES[0].page}
                      renderTabBar={renderTabBar}
                      tabPosition="top"
                      keyboard={'true'}
                      animated
                      centered>
                    {
                        PAGES.map(item => (
                            <TabPane tab={item.name}
                                     key={item.page}
                            >
                                <item.component />
                            </TabPane>
                        ))
                    }
                </Tabs>
            </StickyContainer>
        </div>
    )
}

export default App;
