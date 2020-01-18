import React, { Component } from 'react';

class RegisterLogin extends Component {
    render() {
        return(
            <div className="container">
                <h2> Login </h2>
                <div className="row">
                    <form onSubmit={event => this.submitForm(EventSource)}>
                        <div className="row">
                        <input 
                            name="email"
                            value={this.state.email}
                            onChange={e => this.handleChange(e)}
                            id="email"
                            type="email"
                        />
                        
                        </div>
                    </form>

                </div>
                Login Page

            </div>
        )
    }
}

export default RegisterLogin;