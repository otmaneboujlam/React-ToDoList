import Remove from "./Remove"

function Action({id, remove}) {
    return <div className="my-0 mx-1 "><Remove id = {id} remove = {remove}/></div>
}

export default Action