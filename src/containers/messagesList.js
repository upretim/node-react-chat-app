import {connect} from 'react-redux';
import MessagesListComponent from './../components/messageList';
import message from '../components/message';

const mapStateToProps = (state)=>{
    return {
        messages : state.messages
    }
}

export default connect (mapStateToProps, null, null)(MessagesListComponent)