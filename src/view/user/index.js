import React,{Component} from 'react';
import {Avatar, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import DetailsList from './detailsList'
import data from './data';
class User extends Component{
    render() {
        return (
            <div className="wrap" id="userDetail">
                <div className="header">
                    <Avatar src={data.data.avatar_url}  size="large"/>
                    <Row>
                        <Col span={8}>用户名:{data.data.loginname}</Col>
                        <Col span={8}>积分:{data.data.score}</Col>
                        <Col span={8}>注册时间:{data.data.create_at.split('T')[0]}</Col>
                    </Row>
                    <DetailsList topics={data.data.recent_replies} title="最近创建的话题"/>
                    <DetailsList topics={data.data.recent_topics} title="最近回复的话题"/>
                </div>
            </div>
        )
    }
} 
export default User