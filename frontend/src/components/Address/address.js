import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../../redux/address'

class Address extends React.Component {
  componentWillMount() {
    this.props.onGetAddress("서초대로26길19")
  }
  render() {
    return (
      <div>
        {this.props.storedJuso}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    storedJuso: state.adr.juso,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAddress: (addr) => dispatch(actionCreators.searchAddress(addr))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Address));