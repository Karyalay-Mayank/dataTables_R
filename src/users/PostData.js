import React, { useState } from 'react';
import { Redirect } from 'react-router';

const PostData = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [age, setAge] = useState('');
    const [communityId, setCommunityId] = useState('');
    const [id, setId] = useState(null);

    const postData = () => {
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
                <Redirect to='/' />
            })
        })
    };

    return (
        <>
            <h3>Post Data</h3>
            <div className="fieldContainer">
                <input
                    type='text'
                    value={name}
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
                    className='btnAdd'
                    onClick={postData}>Add User
                </button>
                {/*
                <button
                    onClick={updateData}>Update Data
                </button> */}
            </div>
        </>

    )
};

export default PostData;