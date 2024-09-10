const Book = (props) => {
    console.log(props);

    // if (!props.nmae) {
    //     return null
    // }
    return props.name ? (
      <div className={props.name}>
      <h2>{props.name ? <span>{props.name}</span> : 'default name'}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <p>{props.children}</p>
    </div>
    ) : null;
  }

export {Book};