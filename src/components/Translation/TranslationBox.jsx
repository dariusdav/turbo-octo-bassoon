
const TranslationBox = ({word}) => {
    const handLetters = word.split("").map((w,id) =>{
        return <ul key={id} >
            <img src={`img/${w}.png`} alt={w} className={"hands"}/></ul>
    })    

    return ( 
    <div className="translated">
    {handLetters}
    </div>)
}

export default TranslationBox