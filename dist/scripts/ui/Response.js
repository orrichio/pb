'use strict';

var React = require('react');

var Response = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {

    },
    render: function () {
        return (
            <div className="box-widget danger">
                <div className="margin-bottom">
                    <div className="pb-header-1 danger">Your response</div>
                    <hr />
                    <div className="pb-header-2 danger">You have withdrawn your acceptance of the offer</div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <button className="pb-button default md">VIEW COMMENTS</button>
                    </div>
                    <div >
                        <small className="purple">Date: 24/10/2013 Time: 21:05</small>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = Response;
