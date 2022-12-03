function Remove({id, remove}) {
    return <button className="btn btn-outline-danger btn-sm p-1 m-1" type="button" onClick={() => remove(id)}>Delete</button>
}

export default Remove