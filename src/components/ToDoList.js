import { useState } from "react"
import Liste from "./Liste"

function ToDoList(){
    const [taches, setTaches] = useState([])

    function add() {
        let text = document.querySelector("#toDo")
        const id = crypto.randomUUID()
        if(text.value) {
            const tache = {"id" : id , "text" : text.value}
            setTaches([tache, ...taches])
            text.value = ''
            text.focus()   
        }        
    }

    return <>
            <div className="input-group m-3 w-auto">
                <input type="text" className="form-control m-1" placeholder="To do" id="toDo" />
                <div className="input-group-append m-1">
                    <button className="btn btn-outline-secondary" type="button" onClick={add} >Add</button>
                </div>
            </div>
            <Liste taches = {taches}/>
        </>
}

export default ToDoList