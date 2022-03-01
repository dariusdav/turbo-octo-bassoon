import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileHistory from "../components/Profile/ProfileHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
const Profile = () => {
    const {user} = useUser()
    return (
        <>
        <div className="profile">
        <ProfileHeader username={user.username}></ProfileHeader>
        <ProfileActions></ProfileActions>
        <ProfileHistory translations={user.translations }className={"history"} ></ProfileHistory >
        </div>
        </>
    )
}
export default withAuth(Profile)