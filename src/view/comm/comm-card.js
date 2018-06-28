import React,{Component} from 'react';
import {Card} from 'antd';

export default class CardList extends Component{
    render(){
        let data = this.props.data
        return(
            <div className='wrap'>
            {
               data.map((item,index)=>
                   <Card title={item.title} type='inner'>
                    <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                   </Card>
               )

            }
            </div>
        )
    }
}