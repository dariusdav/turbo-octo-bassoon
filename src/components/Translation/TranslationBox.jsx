
const TranslationBox = ({word}) => {
    const handLetters = word.split("")
    .filter( w=> RegExp(/[a-z]|[A-Z]/).test(w))
    .map((w,id) =>{
        return <ul key={id} >
            <img src={`img/${w}.png`} alt={w} className={"hands"}/></ul>
    })    

    return ( 
    <div className="translated">
    {handLetters}
    </div>)
}

export default TranslationBox