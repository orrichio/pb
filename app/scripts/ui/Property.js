'use strict';

var React = require('react');

var Property = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {

    },
    render: function () {
        return (
            <div className="box-widget purple">
                <div className="pb-header-1">The Property</div>
                <hr />
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-6" style={{'min-width':  '155px' }}>
                        <img src="http://placehold.it/125x80" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pb-header-2">
                            Eddington House, 16 Wigginton Road, Tamworth, B79 8PB
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 end-align-text">
                        <label className="">Asking Price: </label>
                        <div className="pb-header-1">£189,950</div>
                        <button className="pb-button default">VIEW EXTRAS INCLUDED</button>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = Property;
