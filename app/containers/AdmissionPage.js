import React, { Component } from 'react';
import Admission from '../components/Admission/Admission'


class AdmissionPage extends Component{
    state = {

    }


    render() {
        return (
            <Admission classes={this.props.classes}/>
        )
    }
}


export default AdmissionPage;