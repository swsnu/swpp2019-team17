import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../../redux/address'

class Address extends React.Component {
  state = {
    address: '',
  }

  render() {
    const addresses = this.props.storedAddress.map((address) => (<div>{address.address.road + address.address.bldnm}</div>))
    return (
      <div>
        <label>address:</label>
        <input
          type="text"
          value={this.state.address}
          onChange={(event) => this.setState({ address: event.target.value })}
        />
        <button onClick={() => this.props.onGetAddress(this.state.address)}>search address</button>
        {addresses}
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
