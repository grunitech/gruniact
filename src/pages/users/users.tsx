import { useEffect, useState } from 'react';
import './users.scss';
import { User } from '../../models/user';
import UserForm from '../../components/user-form/user-form';
import UsersTable from '../../components/users-table/users-table';

const URL = 'http://localhost:3003/user';

function authRequest(init: RequestInit = {}) {
    const headers = init.headers || {};
    // @ts-ignore
    headers.token = localStorage.getItem('token') || ''
    init.headers = headers;
    return init;
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // on component load, fetch users
        fetch(URL, authRequest())
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you suer')) {
            return;
        }
        await fetch(`http://localhost:3003/user/${id}`, authRequest({method: 'delete'}));
        setUsers(users.filter(u => u.id !== id));
    }

    const handleAdd = async (user: Partial<User>) => {
        // post request to save in db
        fetch(URL, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                // if this is an error response, display it
                if (res.message) {
                    console.error(res.message)
                } else {
                    // add the user to the list
                    user.id = res.id;
                    setUsers([...users, user as User]);
                }
            })
    };

    return (
        <>
            <UserForm onUser={handleAdd}/>
            <UsersTable users={users} removeUser={() => handleDelete(1)}/>
        </>
    );
}
