import React,{Component} from 'react';
import data from './data';
import CardList from '../comm/comm-card';
class About extends Component{
    render() {
        return (<CardList data={data}/>)
    }
} 
export default About