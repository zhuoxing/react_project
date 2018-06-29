import React,{Component} from 'react';
import {List,Card,Avatar} from 'antd';
import { Link } from 'react-router-dom';
export default class DetailsLsit extends Component{
    render(){
        const {replies,replyCount} = this.props
        return(
            <Card title={<span>{replyCount} 条回复</span>}>
                <List
                    itemLayout="vertical"
                    dataSource={replies}
                    renderItem={item => (
                        <List.Item
                            extra={item.ups.length>0?<span>有{item.ups.length}个人赞了这条回复</span>:""}
                        >
                            <List.Item.Meta
                                title={<div><Avatar src={item.author.avatar_url} style={{ marginRight:10}}/><Link to={'/user/'+item.id}>{item.author.loginname}</Link><span>发表于{item.create_at.split('T')[0]}</span></div>}
                                description={<div dangerouslySetInnerHTML={{ __html:item.content}}></div>}
                            />

                        </List.Item>
                    )}
                >
                </List>
            </Card>

        )
    }
}