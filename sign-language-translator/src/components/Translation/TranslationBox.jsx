
const TranslationBox = ({word}) => {
    const handLetters = word.split("").map((w,id) =>{
        return <li key={id}>
            <img src={`img/${w}.png`} alt={w}/></li>
    })    

    return ( 
    <div className="TranslationBox">
    {handLetters}
    </div>)
}

export default TranslationBox