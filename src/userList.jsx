import React, { useState } from 'react';
import axios from "axios";

export const UserList = () => {
    const [users,setUsers] = useState();
    
    const onClickFetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUsers(res.data);
        });
    };

    return (
        <div>
            <button onClick={onClickFetchData}>データ取得</button>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>user.id</th>
                        <th>user.name</th>
                        <th>user.username</th>
                        <th>user.email</th>
                        <th>user.phone</th>
                        <th>user.website</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}