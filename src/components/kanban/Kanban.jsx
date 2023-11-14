import style from './Kanban.module.css';
import { KanbanColumn } from './KanbanColumn';
import { TaskCard } from './TaskCard';

export function Kanban(){
    const data =[
        {
            id: 1,
            columnIndex: 1,
            title: "Task dascrition abaout HTML", 
            deadline: "2024-01-01",
            tags: ["html", "font", "color"],
        }, 
        {
            id: 2,
            columnIndex: 0,
            title: "Task dascrition abaout js", 
            deadline: "2024-01-01",
            tags: ["js", "VS Code"],
        }, 
        {
            id: 3,
            columnIndex: 0,
            title: "Task dascrition abaout CSS", 
            deadline: "2024-01-01",
            tags: ["CSS", "bg image", "color"],
        }, 
    ];

    return <section id="kanban" className={style.todo} style={{
    gridtemplatecolumns: 'repeat(4, 1fr)',
    }}>
        <KanbanColumn tasks={data.filter((a) => a.columnIndex === 0)} title="Backlog"/>
        <KanbanColumn tasks={data.filter((a) => a.columnIndex === 1)} title="Todo"/>
        <KanbanColumn tasks={data.filter((a) => a.columnIndex === 2)} title="In Progress"/>
        <KanbanColumn tasks={data.filter((a) => a.columnIndex === 3)} title="Done"/>
    </section>

}