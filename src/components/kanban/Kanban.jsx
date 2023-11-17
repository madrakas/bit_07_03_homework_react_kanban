import { useState } from 'react';
import style from './Kanban.module.css';
import { KanbanColumn } from './KanbanColumn';


export function Kanban({ tasks }){
    
    const [title, setTitle] = useState('');
    const [columns, setColumns] = useState(['Backlog', 'Todo']);
    // const columns = ['Backlog', 'Todo'];


    function newColumnSubmit(event) {
        event.preventDefault();
        setColumns(prev => [...prev, title]);
        setTitle('');
    }

    function inputUpdate(event){
        setTitle(event.target.value);
    }

    return <section id="kanban" className={style.todo} style={{ gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)`,}}>
        {columns.map((column, idx) => (
            <KanbanColumn key={idx} tasks={tasks.filter((task) => task.columnIndex === idx)} title={column}/>
        ))}
        <form className={style.newColumn}>
        <input text="text" value={title} onChange={inputUpdate} placeholder='Naujas stulpelis...'/>
            <button type="Submit" onClick={newColumnSubmit}>Pridėti</button>
        </form>
    </section>

}