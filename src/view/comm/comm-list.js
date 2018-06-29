import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {List,Avatar,Tag} from 'antd';
import data from '../../data/data'
import Item from 'antd/lib/list/Item';
import CommTag from '../comm/comm-tag';
import {connect} from 'react-redux';
class IndexList extends Component{
    render(){
        console.log(data)
        console.log(this.props)
        return(
            <List loading={false}
                dataSource={data.data}
                renderItem={item=>(<List.Item
                    actions={["回复"+item.reply_count, "访问:"+item.visit_count]}
                >
                    <List.Item.Meta 
                    avatar={<Avatar src={item.author.avatar_url}/>}
                    title={<div><CommTag data={item}/><Link to={'/details/'+item.id}>{item.title}</Link></div>}
                    description={<p style={{marginBottom:0}}>
                        <Link to={'/user/'+item.author_id}>{item.author.loginname}</Link>
                        发表于{item.create_at.split('T')[0]}
                        </p>}
                    />
                </List.Item>)}
            >
                {/* <List.Item>
                    <List.Item.Meta/>
                </List.Item> */}
            </List>
        )
    }
}
export default connect(state =>state.indexList)(IndexList)