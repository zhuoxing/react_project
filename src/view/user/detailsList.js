import React,{Component} from 'react';
import {Card, List, Avatar} from 'antd';

export default class DetailsList extends Component{
    render(){
        const {topics,title} = this.props;
        console.log(topics)
        return(
            <Card title={title} type="inner">
                <List
                    dataSource={topics}
                    itemLayout="vertical"
                    renderItem={item =>(
                        <List.Item
                            extra={'最后回复:'+ item.last_reply_at.split('T')[0]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url}/>}
                                title={<div style={{color:"#1890ff",fontWeight:"bold"}}><span className="authorName">{item.author.loginname}</span>{item.title}</div>}
                            />
                            {/* <div>{item.title}</div> */}
                        </List.Item>
                    )}
                >
                </List>
            </Card>
        )
    }
}