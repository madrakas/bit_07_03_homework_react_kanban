import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { useState } from "react";

const data = [
  {
    id: 1,
    isDeleted: true,
    columnIndex: 1,
    title: 'HTML',
    description: 'Task description about HTML',
    deadline: 2024,
    tags: ['html', 'font', 'color'],
  },
  {
    id: 2,
    isDeleted: false,
    columnIndex: 0,
    title: 'CSS',
    description: 'Task description about CSS',
    deadline: 2024,
    tags: ['css', 'column'],
  },
  {
    id: 3,
    isDeleted: false,
    columnIndex: 0,
    title: 'JavaScript',
    description: 'Task description about JavaScript',
    deadline: 2024,
    tags: ['js', 'loops', 'if'],
  },
];

function App() {
  const [isAsideVisible, setAsideVisibility] = useState(false);
  const [tasks, setTasks] = useState(data);

  function updateAsideVisibilty(newVisibility) {
    setAsideVisibility(newVisibility);
  }

  function addTask(task) {
    setTasks(perv => [...perv, task]);
  }

  return (
    <>
      <Header updateAsideVisibility={updateAsideVisibilty}/>
      <Main tasks={tasks} isAsideVisible={isAsideVisible} addTask={addTask}/>
      <Footer/>
    </>
  );
}

export default App;
