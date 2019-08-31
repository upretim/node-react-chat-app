import React, {Component} from 'react';
import Sidebar from './containers/sidebar';
import MessageList from './containers/messagesList';
import AddMessage from './containers/messageContainer';
import './App.css';
//link to video tutorial https://www.youtube.com/watch?v=x_fHXt9V3zQ

class App extends Component {
  render (){
    return (
      <div id="container">
         <Sidebar users = {[]}/>
         <section id="main">
           <MessageList messages = {[]}/>
           <AddMessage/>
         </section>
      </div>
    );
  }
}
export default App;
