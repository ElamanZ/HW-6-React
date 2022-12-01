import React, {useState} from 'react';

function UsersList({usersList}) {
    const [usersInfo, setUsersInfo] = useState({})


    const getOneUserInfo = (event) => {
        const id = event.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setUsersInfo({
                    phone: data.phone,
                    email: data.email,
                    website: data.website,
                })
            })
    }


    return (

        <>
            <p>____________________________________________________________________</p>
            <h3>phone: {usersInfo.phone}</h3>
            <h3>email: {usersInfo.email}</h3>
            <h3>website: {usersInfo.website}</h3>
            <ul>{
                usersList.map(user =>
                    <li key={user.id}>
                        <p>______________________________</p>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <button
                            data-id={user.id}
                            onClick={getOneUserInfo}>
                            Get info
                        </button>

                    </li>
                )
            }
            </ul>

        </>
    );
}

export default UsersList;