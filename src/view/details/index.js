import React,{Component} from 'react';
import {Card, Avatar} from 'antd';
import { Link } from  'react-router-dom';
import data from './data';
import CommTag from '../comm/comm-tag';
import DetailsList from './detailsList';
class Details extends Component{
    render() {
        console.log(data)
        const title = (<div >
            <h1>{data.data.title}</h1>
            <div style={{
                display:"flex",
                alignItems:'center'
            }}>
                <CommTag data={data.data}/>
                <Avatar src={data.data.author.avatar_url}/>
                <Link to={'/user/'+data.data.author_id}>{data.data.author.loginname}</Link>
                <span>发表于：{data.data.create_at.split('T')[0]}</span>
            </div>
        </div>)
        return (<div className="wrap">
            <Card title={title}>
                <div dangerouslySetInnerHTML={{
                    __html:data.data.content
                }}>

                </div>
            </Card>
            <DetailsList replies={data.data.replies} replyCount={data.data.reply_count}/>
        </div>)
    }
} 
export default Details