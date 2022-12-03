import Edit from "./Edit"
import Remove from "./Remove"
import Save from "./Save"

function Action({tache, remove, toggleEdit, edit}) {
    return <div className="my-0 mx-1">
            <Remove id = {tache.id} remove = {remove}/>
            {
            tache.editable === false ?  
            <Edit tache = {tache} toggleEdit = {toggleEdit} />  
            :
            <Save tache = {tache} toggleEdit = {toggleEdit} edit = {edit}/> 
            }
            </div>
}

export default Action