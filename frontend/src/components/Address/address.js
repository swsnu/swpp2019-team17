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
    mode: 'ready'
  }
  ClickAddress = (address) => {
    if (this.props.index != null){
      this.props.onSelectAddress(this.props.index, address)
      this.setState({mode: 'done'})
    }
    else{
      this.setState({selected_address: address, mode:'detail', address: ''})
    }
  }
  SearchAddress = () => {
    this.props.onGetAddress(this.state.address)
    this.setState({mode: 'search'})
  }
  render() {
    const addresses = this.props.storedAddress.map((address) => (<div key={address.address.road} onClick={() => this.ClickAddress(address.address.road)}>{address.address.road}</div>))
    const detail = this.state.mode == 
    'ready' ? 
    <div>
      <label>address:</label>
      <Form.Control 
        className="text-left"
        type="text"
        value={this.state.address}
        onChange={(event) => this.setState({ address: event.target.value })}
        onFocus={e => this.setState({mode: 'search'})}
      />
      <Button onClick={() => this.SearchAddress()}>search address</Button>
    </div> :
    ('search' ?
    <div>
      <label>address:</label>
      <Form.Control 
        className="text-left"
        type="text"
        value={this.state.address}
        onChange={(event) => this.setState({ address: event.target.value })}
        onFocus={e => this.setState({mode: 'search'})}
      />
      <Button onClick={() => this.SearchAddress()}>search address</Button>
      {addresses}
    </div> : 
    <span>
      <p>{this.state.selected_address}</p>
      <label>detailed address</label>
      <Form.Control className="text-left" onChange={e => this.setState({detailed_address:e.target.value})} >
      </Form.Control>
    </span>)
    return (
      <Alert>{detail}</Alert>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    storedAddress: state.adr.address,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetAddress: (addr) => dispatch(actionCreators.searchAddress(addr)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Address));
