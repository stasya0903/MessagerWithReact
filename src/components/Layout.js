import Header from "./Header";
import ChatList from "./ChatList";
import Messenger from "./Messenger";
import React, { Component } from 'react';

export default class Layout extends Component {
    render(){
        return (
            <div className="h-100">
                <Header/>
                <div className="d-flex w-100 justify-content-between h-100">
                    <div className="w-25 border">
                        <ChatList/>
                    </div>
                    <div className="w-75 border">
                        <Messenger className="m-3"/>
                    </div>
                </div>
            </div>
        )
    }
}
