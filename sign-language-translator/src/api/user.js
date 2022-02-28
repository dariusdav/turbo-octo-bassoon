const checkForUser = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}?username=${username}`)
        if(!response.ok){
            console.log(response.ok);
            throw new Error("Failed to fetch")
        }
        const data = await response.json()
        return [null,data]
    } catch (error) {
        return[error,[]]
    }
}

const createUser = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}`,{
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
        if(!response.ok){
            throw new Error("Failed to create")
        }
        const data = await response.json()
        return [null,data]
    } catch (error) {
        return[error,[]]
    }
    
}

export const loginUser = async (username) => {
    const [checkError,checkUser] = await checkForUser(username)
    if (checkError !== null){
        return [checkError, null]
    }
    if (checkUser.length > 0){
        return [null,checkUser.pop()]
    }
    return await createUser(username)


}