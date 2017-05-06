'use strict';

var React = require('react');

var BuyerDetails = React.createClass({
    getInitialState: function () {
        return { "showDetails": "show", "chevronState": "up" };
    },
    toggle: function () {
        var css = (this.state.showDetails === "hidden") ? "show" : "hidden";
        var chevronState = (this.state.chevronState === "up") ? "down" : "up";

        this.setState({ "showDetails": css, "chevronState": chevronState })
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {

    },
    render: function () {
        return (
            <div className="box-widget">
                <div className="row">
                    <div className="col-md-10">
                        <div className="pb-header-1">Buyer's Details</div>
                    </div>
                    <div className="col-md-2 end-align-text">
                        <div className="pb-action-label" onClick={this.toggle}>HIDE <i className={` glyphicon glyphicon-chevron-${this.state.chevronState}`}></i></div>
                    </div>
                </div>
                <hr />
                <div className={` row ${this.state.showDetails}`}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-4">
                                <label className="purple"> Name: </label>
                            </div>
                            <label> Mr David Shepherd </label>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-4">
                                <label className="purple"> Buying Position: </label>
                            </div>
                            <label> Property to sell - 20 weeks on the market</label>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-4">
                                <label className="purple"> Financial Position: </label>
                            </div>
                            <label>Mortgage required - approved</label>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-4">
                                <label className="purple"> Timescale: </label>
                            </div>
                            <label> Would like to move in 10 weeks - no chain</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = BuyerDetails;
