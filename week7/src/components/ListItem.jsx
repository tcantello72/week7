function ListItem(props) {
    const task = props.taskName;
    const description = props.description;
    const time = props.time;

    return (
        <li>
          <h2>{task}</h2>
          <p>{description}</p>
          <p>{time}</p>
        </li>
    )

}

export default ListItem;