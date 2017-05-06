'use strict';

var React = require('react');

var Status = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
    
  },
  render: function() {
    return (
      <div className={`status ${ this.props.statusType }`}>
      Status: {this.props.statusMessage}
      </div>
    );
  }
});


module.exports = Status;
