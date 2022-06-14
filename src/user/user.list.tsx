import React from "react"
import { UserElement } from "./user.element";
import { UserType } from "./user.type"

type UserListProps = { 
    users: UserType[]
    onDelete: (id: number) => void
}

export const UserList = ({ users, onDelete }: UserListProps) => {
    return (
        <ul>
            {users.map((el) => <UserElement key={el.id} user={el} onDelete={onDelete}/>)}
        </ul>
    );
}
