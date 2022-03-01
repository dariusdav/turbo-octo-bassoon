import { clearUser } from "../../api/user"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils.js/storage"

const ProfileActions = () => {
    const { user, setUser } = useUser()

    const onClick = async () => {
        const [error, result] = await clearUser(user, "")
        if (error === null) {
            setUser(result)
            storageSave("user",user)
        }
    }
    return (
        <div>
            <button onClick={onClick}>Clear History</button>
        </div>
    )
}

export default ProfileActions