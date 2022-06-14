import { useCallback } from "react"
import { UserType } from "./user.type"

type UserElementProps = { 
    user: UserType
    onDelete: (id: number) => void
}

export const UserElement = ({user, onDelete}: UserElementProps) => {
    const onClick = useCallback(() => onDelete(user.id), [user, onDelete])
    
    return (
        <li>
            <span>{user.name}</span>
            <p>{user.rank}</p>
            <button onClick={onClick}>Delete this User</button>
        </li>
    )
}