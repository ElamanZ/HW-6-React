import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>setUsers(data))
    }
    return (
        <>
            <h1>Users page</h1>
            <button onClick={getUsers}>Get users</button>
            <UsersList usersList={users}/>
        </>
    );
}

export default UsersPage;