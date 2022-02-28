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
            setApiError(error)
        }
        if (data !== null) {
            storageSave("user", data)
            setUser(data)
        }
    }
    
    return (
        <>
            <h2>Lost In Translation</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                        placeholder="What's your name?" {...register("username", usernameConfig)}
                    />
                    {errorMessage}
                </fieldset>
                <button type="submit">Login</button>
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}

export default Login