import React from 'react';
import "./contact.css";

// function Contact() {
//     return (
//         <div>
//             <h1> The contact page </h1>
//         </div>
//     );
// };

class Contact extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    }

    change = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        })
    };

    render() {
        return (
            <form className="contact-form">
                <input 
                    name= "firstName"
                    placeholder="First name" 
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />
                <br/>
                <input 
                    name= "lastName"
                    placeholder="Last name" 
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />
                <br/>
                <input 
                    name= "email"
                    placeholder="Email"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br/>
                <input 
                    name= "message"
                    placeholder="Message" 
                    value={this.state.message}
                    onChange={e => this.change(e)}
                />
                <br/>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
};

export default Contact;