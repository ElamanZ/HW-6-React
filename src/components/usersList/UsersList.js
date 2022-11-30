import React, {useState} from 'react';

function UsersList({usersList}) {
    const [usersInfo, setUsersInfo] = useState()


    const getOneUserInfo = (event) => {
        const id = event.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setUsersInfo(data.phone)
            })

    }
    console.log(`usersInfo ${usersInfo}`)
    return (

        <>

            <h2>Phone: {usersInfo}</h2>
            <p>_______________________________</p>
            <ul>{
                usersList.map(user =>
                    <li key={user.id}>
                        <p>______________________________</p>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>city: {user.address.city}</p>
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