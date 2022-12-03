import Action from "./Action"

function Liste({taches, remove, toggleEdit, edit}) {
    return <ul className="list-group my-3 mx-1" id="list">
           {taches.map(tache => <li className="list-group-item d-flex flex-row justify-content-between align-items-center p-1" key = {tache.id}>
                                    {tache.editable === false ?  
                                        <p className="text-break my-0 mx-1">{tache.text}</p>  
                                        : 
                                        <input type="text" autoFocus defaultValue={tache.text} id="editToDo" /> 
                                    }
                                    <Action tache = {tache} remove = {remove} toggleEdit = {toggleEdit} edit = {edit}/>
                                </li>)}
        </ul>
    
}

export default Liste