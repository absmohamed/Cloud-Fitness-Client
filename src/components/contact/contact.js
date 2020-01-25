import React from 'react';
import "./contact.scss";

function Contact() {
    return (
        <div className="contact-form">
            <form name="contact" method="post" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                <label>YOUR NAME: <input type="text" name="name"/></label>
                </p>
                <p>
                <label>YOUR EMAIL: <input type="email" name="email"/></label>
                </p>
                <p>
                <label>MESSAGE: <textarea name="message"></textarea></label>
                </p>
                <p>
                <button className="contact-button" type="submit">Send</button>
                </p>
            </form>
        </div>
    );
};

export default Contact;