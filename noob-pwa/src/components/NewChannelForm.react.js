import React from 'react';

class NewChannelForm extends React.Component {

    state = {
        userInput: ''
    }

    // handleChange(k) {
    //     this.setState({ userInput: k });
    // }

    handleClickAdd() {
        // GET value from input
        // send to function received via props
        this.props.onClick(this.state.userInput);
        this.setState({ userInput: '' });
    }

    render() {
        // console.log(this.state.userInput);

        return (
            <div className="section">
                <div className="content">
                    <h2>Add Channel name</h2>
                </div>
                <form>
                    <div className="field is-grouped">
                        <p className="control is-expanded">
                            <input
                                className="input is-medium"
                                type="channelName" /*type="text"*/
                                value={this.state.userInput}
                                onChange={ (event) => this.setState({ userInput: event.target.value }) }
                                placeholder="eg. FPSThailand, HRKChannel etc." />
                        </p>
                        <p className="control">
                            <a className="button is-medium is-primary" onClick={() => this.handleClickAdd()}>Add</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewChannelForm;