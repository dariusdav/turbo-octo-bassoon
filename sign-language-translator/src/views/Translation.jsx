import { useState } from "react"
import { updateUser } from "../api/user"
import TranslationBox from "../components/Translation/TranslationBox"
import TranslationForm from "../components/Translation/TranslationForm"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils.js/storage"


const Translation = () => {
    const [translation,setTranslation] =useState(null)
    const {user,setUser} = useUser()
    const handleTranslateClicked = async (word) =>{
        setTranslation(word.Translation)
        console.log("prev Array", user);
        console.log("word  ",word.Translation);
        const [error, result] = await updateUser(user,word.Translation)
        console.log(result);
        //Updating the local user info to sync states
        if(error === null){
            setUser(result)
            storageSave("user",result)
        }
    }


    return (
        <>
            <h1>Translation</h1>
            <section id="Translation-input">
                <TranslationForm onClicked={handleTranslateClicked}></TranslationForm>
                {translation && <TranslationBox word={translation}></TranslationBox>}
            </section>
            <div>
            </div>

        </>
    )
}
export default withAuth(Translation)