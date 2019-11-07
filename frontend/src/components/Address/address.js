import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../../redux/address'

//bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './address.css';

class Address extends React.Component {
  state = {
    address: '',
    selected_address: '',
    detailed_address: '',
    mode: 'search'
  }
  ClickAddress = (address) => {
    this.setState({selected_address: address, mode:'detail', address: ''})
  }
  SearchAddress = () => {
    this.props.onGetAddress(this.state.address)
    this.setState({mode: 'search'})
  }
  render() {
    const addresses = this.props.storedAddress.map((address) => (<div key={address.address.road} onClick={() => this.ClickAddress(address.address.road)}>{address.address.road}</div>))
    const detail = this.state.mode == 'search' ? addresses : 
    (<span>
      <p>{this.state.selected_address}</p>
      <label>detailed address</label>
      <Form.Control onChange={e => this.setState({detailed_address:e.target.value})}>
      </Form.Control>
    </span>)
    return (
      <div>
        <label>address:</label>
        <Form.Control className="text-left"
          type="text"
          value={this.state.address}
          onChange={(event) => this.setState({ address: event.target.value })}
        />
        <Button onClick={() => this.SearchAddress()}>search address</Button>
        <Alert>{detail}</Alert>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.adr.address)
  return {
    storedAddress: state.adr.address,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetAddress: (addr) => dispatch(actionCreators.searchAddress(addr)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Address));
