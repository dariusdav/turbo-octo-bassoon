const checkForUser = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}?username=${username}`)
        console.log(process.env.REACT_APP_API_BASE_URL);
        if (!response.ok) {
            console.log(response.ok);
            throw new Error("Failed to fetch")
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error, []]
    }
}

const createUser = async (username) => {
    console.log("x-api-key", process.env.REACT_APP_API_KEY,);
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}`, {
            method: "POST",
            headers: {
                "x-api-key": process.env.REACT_APP_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error("Failed to create")
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error, []]
    }

}

export const loginUser = async (username) => {
    const [checkError, checkUser] = await checkForUser(username)
    if (checkError !== null) {
        return [checkError, null]
    }
    if (checkUser.length > 0) {
        return [null, checkUser.pop()]
    }
    return await createUser(username)


}

export const updateUser = async (user, translation) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/${user.id}`, {
            method: "PATCH",
            headers: {
                "x-api-key": process.env.REACT_APP_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                translations: [...user.translations, translation]
            })
        })
        if (!response.ok) {
            throw new Error("Could not update the user")
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error, []]
    }
}

export const clearUser = async (user) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/${user.id}`, {
            method: "PATCH",
            headers: {
                "x-api-key": process.env.REACT_APP_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error("Could not update the user")
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error, []]
    }
}