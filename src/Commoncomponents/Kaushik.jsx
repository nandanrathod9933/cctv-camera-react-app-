import React, { useState } from 'react';

const Kaushik = () => {
    const [contacts, setContacts] = useState([
        {
            "first_name": "Melloney",
            "country": "Russia"
        },
        {
            "first_name": "Fayre",
            "country": "Russia"
        },
        {
            "first_name": "Bernhard",
            "country": "France"
        },
        {
            "first_name": "Lauren",
            "country": "China"
        },
        {
            "first_name": "Terza",
            "country": "China"
        }
    ]);

    const [countries, setCountries] = useState(["All", "China", "Russia", "France"]);
    const [countrySelected, setSelected] = useState("All");

    const handleChange = e => {
        setSelected(e.target.value);
    };

    let filteredContacts = contacts;
    if (countrySelected !== "All") {
        filteredContacts = contacts.filter(contact => contact.country === countrySelected);
    }

    return (
        <div>
            <div className="header">
                Countries:
                <select onChange={handleChange}>
                    {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((contact, id) => (
                        <tr key={id}>
                            <td>{contact.first_name}</td>
                            <td>{contact.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Kaushik;

