import React, {Component} from 'react';
import Sidebar from './containers/sidebar';
import MessageList from './containers/messageList';
import AddMessage from './containers/addMessage';
import './App.css';
//link to video tutorial https://www.youtube.com/watch?v=x_fHXt9V3zQ

class App extends Component {
  render (){
    return (
      <div id="container">
         <Sidebar/>
         <section id="main">
           <MessageList/>
           <AddMessage/>
         </section>
      </div>
    );
  }
}
export default App;
