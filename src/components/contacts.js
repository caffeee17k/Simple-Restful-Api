import React from 'react';

const Contacts = ({ contacts }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <ul>
                    <div class="card text-white bg-info mb-3" style={{ maxWidth: `18rem` }}>

                        <h5 class="card-header">{contact.id} - {contact.name}</h5>

                        <div class="card-body">
                            <h6 class="card-text">E-mail: {contact.email}</h6>
                            <p class="card-text">{contact.company.catchPhrase}</p>
                            <p class="card-text">Contact: {contact.phone}</p>
                        </div>
                    </div>
                </ul>

            ))}
        </div>
    )
};

export default Contacts;