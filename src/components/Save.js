function Save({tache, toggleEdit, edit}) {
    function onclick(tache) {
        edit(tache)
        toggleEdit(tache.id)
    }
    return <button className="btn btn-outline-secondary p-1 m-1" type="button" onClick={() => onclick(tache)} >Save</button>
}

export default Save