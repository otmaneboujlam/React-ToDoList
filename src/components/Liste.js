function Liste({taches}) {
    return <ul className="list-group mt-3" id="list">
           {taches.map(tache => <li className="list-group-item text-break" key = {tache.id}>{tache.text}</li>)}
        </ul>
    
}

export default Liste