import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateData = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [age, setAge] = useState('');
    const [communityId, setCommunityId] = useState('');
    const [id, setId] = useState(null);

    const updateData = () => {
        let data = { name, mobile, age, communityId };
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log('Posted', resp);
                // getData();

                setId('');
                setName('');
                setMobile('');
                setAge('');
                setCommunityId('');
            })
        })
    };

    return (
        <>
            <h3>Post Data</h3>
            <div className="fieldContainer">
                <input
                    type='text'
                    value={data.name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type='text'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <input
                    type='text'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    type='text'
                    value={communityId}
                    onChange={(e) => setCommunityId(e.target.value)}
                />

                <br />

                <button
                    type='button'
                    onClick={updateData}>Update Data
                </button>
            </div>
        </>

    )
};

export default UpdateData;