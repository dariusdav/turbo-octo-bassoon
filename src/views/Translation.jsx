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
        const [error, result] = await updateUser(user,word.Translation)
        //Updating the local user info to sync states
        if(error === null){
            setUser(result)
            storageSave("user",result)
        }
    }


    return (
        <>
            <section id="Translation-input">
                <TranslationForm onClicked={handleTranslateClicked}></TranslationForm>
            </section>
            <div className="translation-box">
                {translation && <TranslationBox word={translation}></TranslationBox>}
            </div>

        </>
    )
}
export default withAuth(Translation)