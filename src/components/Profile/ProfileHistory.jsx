const ProfileHistory = ({translations}) => {
    console.log("ttr",translations)
    return(
        <section>
            <h4> Your Translation history</h4>
            <ul>
                {translations.map((t,index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </section>
    )
}

export default ProfileHistory