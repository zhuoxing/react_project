import React,{Component} from 'react';
import {Menu,Row,Col,List,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import CommSider from '../comm/comm-sider';
import IndexList from '../comm/comm-list';
class Index extends Component{
    render() {
        return (
            <div className='wrap'>
                <Row>
                    <Col md={6} xs={0}>
                        <CommSider id='indexMenu' mode="vertical"/>
                    </Col>
                    <Col md={0} xs={24}>
                        <CommSider id='indexXsMenu' mode="horizontal"/>
                    </Col>
                    <Col md={18} xs={24} className='indexList'>
                        <IndexList/>
                    </Col>
                </Row>
            </div>
        )
    }
} 
export default Index