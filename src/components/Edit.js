function Edit({tache, toggleEdit}) {
    return <button className="btn btn-outline-secondary p-1 m-1" type="button" onClick={() => toggleEdit(tache.id)} >Edit</button>

}

export default Edit