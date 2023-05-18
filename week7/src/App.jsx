import {useState} from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form"

function App() {
  const [isTaskListVisible, setIsTaskListVisible] = useState(true);
  const [data, setData] = useState([
    {
      title: "have lunch",
      description: "lunch",
      time: "2pm ET"
    },
    {
      title: "have dinner",
      description: "dinner",
      time: "6pm ET"
    },
    {
      title: "Game",
      description: "Cubs Game",
      time: "8pm ET"
    }
  ])
 
  return (
    <>
      <div>
        <Form data = {data} setData={setData}/>
      </div>
      <div>
      <button onClick = {() => setIsTaskListVisible(!isTaskListVisible)}>{isTaskListVisible ? 'Hide Tasks' : 'show Tasks'}</button>
      {isTaskListVisible && (<ol>
          {
            //<ListItem taskName = "Have Lunch" description = "Lunch" time = "1pm"/>
            //<ListItem taskName = "start work" description = "make react demo" time = "9am"/>
          }
          {
            data.map( (task, index) => (
              <ListItem 
                key = {index}
                taskName={task.title}
                description={task.description}
                time={task.time}
              />
            ))
          }
          </ol>)}
      </div>
    </>
  )
}

export default App


