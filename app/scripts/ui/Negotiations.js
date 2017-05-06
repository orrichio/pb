'use strict';

var React = require('react');

var Negotiations = React.createClass({
    getInitialState: function () {
        return { "initalInputValue": "", "maskedValue": "" };
    },
    onInputChange: function (target) {
        this.setState({ "initalInputValue": target.target.value })
        var unMaskedValue = (target.target.value).replace(/,/g, '');
        var maskedValue = (unMaskedValue).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        maskedValue = maskedValue.replace(/[^0-9\.,]/g, '');
        unMaskedValue = maskedValue.replace(/,/g, '');
        this.setState({ "maskedValue": maskedValue });

        if (unMaskedValue) {
            console.log({"Number": parseFloat(unMaskedValue) }) ;
        }



    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {

    },
    render: function () {
        return (
            <div className="box-widget purple">
                <div className="pb-header-1">Re-open negotiations</div>
                <hr />
                <div className="box-widget row padding-small">
                    <div className="pb-header-2 col-md-8">
                        Would you like your Expert, Robert White to negotiate on your behalf? It's completely free!
                    </div>
                    <div className="col-md-4 end-align-text" style={{ "height": "50px" }}>
                        <button className="pb-button md purple" style={{ "margin": "10px" }}>NEGOTIATE FOR ME</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="row margin-bottom">
                            <div className="pb-header-2 col-md-10" >Enter an offer you are willing to accept:  </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6 pb-input">
                                <div className="row">
                                    <span>£</span> <input value={this.state.maskedValue} placeholder="Amount  " onChange={this.onInputChange} />

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 ">
                                <button className="pb-button lg blue pull-right" >SUBMIT OFFER</button>
                            </div>

                        </div>
                        <div className="row">
                            <button className="pb-button md purple" style={{ "margin": "10px", "marginLeft": "15px" }}>ADD COMMENTS</button>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
});


module.exports = Negotiations;
