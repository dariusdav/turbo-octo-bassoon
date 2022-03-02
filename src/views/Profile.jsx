import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileHistory from "../components/Profile/ProfileHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
const Profile = () => {
    const {user} = useUser()
    console.log("Profile",user)
    return (
        <>
        <div className="profile">
        <ProfileHeader username={user.username}></ProfileHeader>
        <ProfileActions></ProfileActions>
        {user.translations !== null &&
            <ProfileHistory translations={user.translations }className={"history"} />
        } {user.translations === null &&
            <p>No history</p>
        }
        </div>
        </>
    )
}
export default withAuth(Profile)