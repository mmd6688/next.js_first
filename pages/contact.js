// pages/contact.js

import React from 'react';
import ContactForm from '../components/ContactForm';

// Contact コンポーネントは「Contact」ページの主要コンテンツを表します。
const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries, please fill out the form below.</p>
            <ContactForm />
        </div>
    );
};

export default Contact;