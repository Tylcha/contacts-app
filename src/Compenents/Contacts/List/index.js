import React, { useState } from 'react'

function List({ pushcontacts }) {
    const [filter, setFilter] = useState('Search');
    
    const onChange = (e) => {
        setFilter(e.target.value)
    }

    //filtered array
    const filtered = pushcontacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filter.toLowerCase())
        )
    })

    //show data
    const contact = filtered.map((data, index) => {
        return (
            <li key={index}>
                <span>Fullname: {data.fullname}</span>
                <span>Phone Number: {data.phone_number}</span>
            </li>);
    });

    return (
        <div>
            <input name="filter" placeholder="Filter" value={filter} onChange={onChange} />
            <ul className="list">
                {contact}
            </ul>
            <p>Total contacts ({filtered.length})</p>
        </div>
    )
}

export default List