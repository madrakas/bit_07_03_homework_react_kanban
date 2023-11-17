import style from './Header.module.css';

export function Header({ updateAsideVisibility }){
    function showAside(){
      updateAsideVisibility(true);
    }

    return (
        <header className={style.mainHeader}>
        <div src="#" alt="Logo" className="logo">Task-46</div>
        <button onClick={showAside} className="btn">Add Task</button>
      </header>
    );
}