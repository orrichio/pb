
var React = window.React = require('react'),
  ReactDOM = require("react-dom"),
  Timer = require("./ui/Timer"),
  Status = require("./ui/Status"),
  Property = require("./ui/Property"),
  BuyerDetails = require("./ui/BuyerDetails"),
  BuyerOffer = require("./ui/BuyerOffer"),
  Response = require("./ui/Response"),
  Negotiations = require("./ui/Negotiations"),
  mountNode = document.getElementById("app");

var TodoList = React.createClass({
  render: function () {
    var createItem = function (itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function () {
    return { items: [], text: '' };
  },
  onChange: function (e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({ items: nextItems, text: nextText });
  },
  render: function () {
    return (
      <div>
        <Status statusType="danger" statusMessage="Withdrawn" />
        <div className="row">
          <div className="col-md-12">
          <Property />

          </div>
        </div>
        <div >
          <BuyerDetails />
        </div>
        <div className="row">
          <div className="col-md-6">
            <BuyerOffer />
          </div>
          <div className="col-md-6">
            <Response />
          </div>
        </div>
        <Negotiations />
      </div>
    );
  }
});


ReactDOM.render(<TodoApp />, mountNode);

