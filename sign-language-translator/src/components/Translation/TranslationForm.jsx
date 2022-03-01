import { useForm } from "react-hook-form"

const TranslationForm = ({ onClicked }) => {
    // const {setTranslation} = useTranslation(null)
    const { register, handleSubmit, formState: { errors } } = useForm()
    if (errors !== null) {
        console.log(errors);
    }
    const onSubmit = data => {
        onClicked(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="Translation">Translation?</label>
                    <input type="text" {...register("Translation")}></input>
                    <button type="submit">Translate</button>
                </fieldset>

            </form>
        </>
    )
}

export default TranslationForm