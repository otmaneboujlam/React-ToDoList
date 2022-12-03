import Action from "./Action"

function Liste({taches, remove}) {
    return <ul className="list-group my-3 mx-1" id="list">
           {taches.map(tache => <li className="list-group-item d-flex flex-row justify-content-between align-items-center p-2" key = {tache.id}>
                                    <p className="text-break my-0 mx-1">{tache.text}</p>
                                    <Action id = {tache.id} remove = {remove}/>
                                </li>)}
        </ul>
    
}

export default Liste