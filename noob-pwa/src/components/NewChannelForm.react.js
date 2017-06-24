import React from 'react';

class NewChannelForm extends React.Component {
    render() {
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
                                placeholder="eg. FPSThailand, HRKChannel etc." />
                        </p>
                        <p className="control">
                            <a className="button is-medium is-primary">Add</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewChannelForm;