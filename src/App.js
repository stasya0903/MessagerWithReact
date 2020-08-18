import React from 'react';
import Messenger from "./Components/Messenger.js";
import Header from "./components/Header";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChatList from "./components/ChatList";
import Layout from "./components/Layout";


function App() {
    return (
        <MuiThemeProvider>
           <Layout/>
        </MuiThemeProvider>
    );
}

export default App;
