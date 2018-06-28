import React,{Component} from 'react';
import {Layout} from 'antd';
const {Footer} = Layout; 
class CommFooter extends Component{
    render() {
        return(
            <Footer style={{
                textAlign:'center'
            }}>
                京ICP备08102442号-1 2007-2018 MIAOV.COM 版权所有
            </Footer>
        )
    }
}

export default CommFooter