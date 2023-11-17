import { Aside } from '../aside/Aside';
import { Kanban } from '../kanban/Kanban';
import style from './Main.module.css';

export function Main({ tasks, isAsideVisible, addTask }){
    return (
      <main className={style.mainContent}>
        <Kanban tasks={tasks} />
        {isAsideVisible && <Aside addTask={addTask}/>}
      </main>
    );
}