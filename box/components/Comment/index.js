import React from 'react';
export default class Comment extends React.Component{
    render(){
        return <li className="list-group-item">
            {this.props.author}:{this.props.children}
            <span className="pull-right">{this.props.date}</span>
        </li>
    }
}