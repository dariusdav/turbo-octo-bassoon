import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileHistory from "../components/Profile/ProfileHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
const Profile = () => {
    const {user} = useUser()
    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}></ProfileHeader>
        <ProfileActions></ProfileActions>
        <ProfileHistory translations={user.translations} ></ProfileHistory >
        </>
    )
}
export default withAuth(Profile)