import './users-table.scss';
import { User } from '../../models/user';

export interface UsersTableProps {
    users: User[];
    removeUser: (u: User) => void;
}

export default function UsersTable({users, removeUser}: UsersTableProps) {
    return (
        <table className="users">
            <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>first name</th>
                <th>last name</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            {users.map((u: User, i) => (<tr key={i}>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td>{u.fname}</td>
                <td>{u.lname}</td>
                <td>
                    <button name={u.id?.toString()} onClick={() => removeUser(u)}>DELETE</button>
                </td>
            </tr>))}
            </tbody>
        </table>
    );
}
