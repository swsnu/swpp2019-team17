import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/certificate';

import Form from 'react-bootstrap/Form';

class Certificate extends Component {
    state = {
    }

    certificateUpload = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        this.props.certificateFile(formData);

        console.log("This is from certificateUpload()", this.props.isCertified);
    }

    render() {
        return (
            <Form.Control type="file" className="signuptutor-input-certificate"
                onChange={event => this.certificateUpload(event)} />
        )
    }

}

const mapStateToProps = state => {
    return {
        isCertified: state.cer.isCertified
    }
}

const mapDispatchToProps = dispatch => {
    return {
        certificateFile: (file) => {
          dispatch(actionCreators.certificateTutor(file))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Certificate);