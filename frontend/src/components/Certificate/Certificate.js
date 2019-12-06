import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/certificate';

import Form from 'react-bootstrap/Form';

class Certificate extends Component {

    certificateUpload = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        
        this.props.certificateFile(formData);

    }

    render() {

        let list = null;

        if (this.props.ocr !== null) {           
            list = this.props.ocr.recognition_words.map(text => 
            <p>{text}</p>);
        }


        return (
            <div>
                <Form.Control type="file" className="signuptutor-input-certificate"
                    onChange={event => this.certificateUpload(event)} />
                {list}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ocr: state.cer.ocr
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