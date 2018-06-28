import React,{Component}from 'react';
import {Tag} from 'antd';

const tab ={
    all:{
        txt: "全部",
        isIndex: true
    },
    top:{
        color: "magenta",
        txt: "置顶",
        isIndex: false
    },
    good:{
        txt: "精华",
        isIndex: true,
        color: "geekblue"
    },
    ask:{
        txt: "问题",
        isIndex: true
    },
    share:{
        txt: "分享",
        isIndex: true,
        color: "purple"
    },
    job:{
        txt: "招聘",
        isIndex: true,
        color: "cyan"
    },
    dev:{
        txt: "测试",
        isIndex: true,
        color: "lime"
    }
}
function getTag(data){
    return(
        data.top?'top':
        data.good?'good':data.tab
    )
}
export default class CommTag extends Component{
    render(){
        let nowTag = tab[getTag(this.props.data)];
        console.log(tab.dev.color)
        return(
            <Tag color={nowTag.color}>{nowTag.txt}</Tag>
        )
    }
}