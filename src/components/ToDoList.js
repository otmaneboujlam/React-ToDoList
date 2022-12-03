import { useState } from "react"
import Liste from "./Liste"

function ToDoList(){
    const [taches, setTaches] = useState([])

    function add() {
        let text = document.querySelector("#toDo")
        const id = crypto.randomUUID()
        if(text.value) {
            const tache = {"id" : id , "text" : text.value, "editable" : false}
            setTaches([tache, ...taches])
            text.value = ''
            text.focus()   
        }        
    }

    function remove(id) {
        setTaches(
            taches.filter(tache => tache.id !== id)
        )
    }

    function toggleEdit(id) {
        setTaches(
          taches.map(tache => tache.id === id
            ? { ...tache, editable: !tache.editable }
            : tache
          )
        )
    }

    function edit(tache) {
        const text = document.querySelector(`#${tache.id}`).value
        console.log(text)
        if(text) {
            tache.text = text
            setTaches([...taches])
        }
    }

    return <>
            <div className="input-group m-3 w-auto">
                <input type="text" className="form-control m-1" placeholder="To do" id="toDo" />
                <div className="input-group-append m-1">
                    <button className="btn btn-outline-primary btn-lg" type="button" onClick={add} >Add</button>
                </div>
            </div>
            <Liste taches = {taches} remove = {remove} toggleEdit = {toggleEdit} edit = {edit}/>
        </>
}

export default ToDoList