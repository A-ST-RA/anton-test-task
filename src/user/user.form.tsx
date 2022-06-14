import { RankType } from "./user.type"

export const UserForm = () => {
    const rank: RankType[] = ['Junior', 'Middle', 'Senior'];

    return (
        <form>
            <input type='text' placeholder='Имя' />
            <input type='text' placeholder='Фамилия' />

            <select>
                {rank.map(el => <option key={el} value={el}>{el}</option>)}
            </select>
        </form>
    )
}