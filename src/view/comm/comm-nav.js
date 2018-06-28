import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout,Row,Col,Divider,Menu,Icon} from 'antd';

class Nav extends Component{
    render() {
        let {mode,id} = this.props
        return (
            <Menu mode={mode} 
                id={id}
                theme='light'
            >
                <Menu.Item key="index">
                    <Icon type="home" />
                    <Link to='/index/all'>首页</Link>
                </Menu.Item>
                <Menu.Item key="book">
                    <Icon type="book" />
                    <Link to='/book'>教程</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Icon type="info-circle-o" />
                    <Link to='/about'>关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Nav