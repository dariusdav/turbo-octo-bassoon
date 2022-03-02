import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user';
import { useEffect, useState } from 'react';
import { storageSave } from '../../utils.js/storage';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';


const usernameConfig = {
    required: true,
    minLength: 5
}

const Login = () => {
    const { user, setUser } = useUser(null)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }
        if (errors.username.type === 'minLength') {
            return <span>Username is too short, minimum length required is 5</span>
        }
    })()

    const [apiError, setApiError] = useState(null);
    useEffect(() => {
        if (user !== null) {
            navigate("/Translation")
        }
    }, [user, navigate])
    const onSubmit = async ({ username }) => {
        const [error, data] = await loginUser(username)
        if (error !== null) {
            setApiError(error.errorMessage)
        }
        if (data !== null) {
            storageSave("user", data)
            setUser(data)
        }
    }

    return (
        <>
            <div className='get-started'>
                <div className="logo-and-splash">
                    <img src={"img/Splash.svg"} alt={"splash"} className='splash' ></img>
                    <img src={"img/logo.png"} alt={"logo"} className='logo'></img>
                </div>
                <div>
                    <h1 className='site-name'>Lost In Translation</h1>
                    <h3>Get started</h3>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username"></label>
                    <input type="text"
                        placeholder="What's your name?" {...register("username", usernameConfig)}
                    />
                    {errorMessage}
                    <button type="submit">Login</button>
                {apiError !==null && <p>{apiError}</p>}
                </fieldset>
            </form>
        </>
    )
}

export default Login