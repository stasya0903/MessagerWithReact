import { List, ListItem } from '@material-ui/core';
import React, { Component } from 'react';

export default class ChatList extends Component {
    render() {
        return (
            <List>

                    <ListItem
                        button = { true }
                    >Chat 1</ListItem>



                    <ListItem
                        button = { true }
                    >Chat 2</ListItem>

            </List>
        )
    }
}
