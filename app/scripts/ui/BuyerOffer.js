'use strict';

var React = require('react');

var BuyerOffer = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {

    },
    render: function () {
        return (
            <div className="box-widget">
                <div className="margin-bottom">
                    <div className="pb-header-1">Buyer's Offer</div>
                    <hr />
                    <h3>£179,000</h3>
                    <small>Subject to offer qualifications by Purplebricks</small>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <button className="pb-button default md">VIEW COMMENTS</button>
                    </div>
                    <div className="">
                        <small className="purple">Date: 24/10/2013 Time: 20:17</small>
                    </div>
                </div>

            </div>
        );
    }
});


module.exports = BuyerOffer;
