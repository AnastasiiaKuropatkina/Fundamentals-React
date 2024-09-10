export function NewPost (props) {
    const {name, id, cb, removePost} = props;
    return <div>
        
        <div onClick={cb}>{name} <button onClick={() => removePost(id)}>delete</button></div>
        
    </div>
}
