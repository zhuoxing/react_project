import React,{Component} from 'react';
import {Layout,Row,Col,Divider,Icon,Dropdown,Button} from 'antd';
import Nav from './comm-nav';
const {Header} = Layout;

class CommHeader extends Component{
    render() {
        return (<Header>
            <Row className='wrap'>
                <Col span={6} md={6} xs={24}>
                    <h1 id='logo'>cNode</h1>
                </Col>
                <Col span={18} md={18} xs={0}>
                    <Divider type="vertical" className='header-divider'/>
                    <Nav mode="horizontal" id='nav'/>
                </Col>
                <Col md={0} xs={24} className='xsNav'>
                    <Dropdown overlay={<Nav mode='vertical' id='xsNav'/>}
                        trigger={['click']} 
                    >
                        <Button><Icon type="bars" /></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Header>);
    }
}

export default CommHeader