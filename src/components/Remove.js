function Remove({id, remove}) {
    return <button className="btn btn-outline-secondary p-1 m-1" type="button" onClick={() => remove(id)}>Delete</button>
}

export default Remove