import {connect} from 'react-redux';
import SidebarComponent from './../components/sidebar';

const mapStateToProps = (state)=>{
    return {
        users : state.users
    }
}

export default connect (mapStateToProps, null, null)(SidebarComponent)