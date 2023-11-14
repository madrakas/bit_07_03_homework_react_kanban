import style from './Header.module.css';

export function Header(){
    return (
        <header className={style.mainHeader}>
        <div src="#" alt="Logo" className="logo">Task-46</div>
        <button id="add_task" className="btn">Add Task</button>
      </header>
    );
}