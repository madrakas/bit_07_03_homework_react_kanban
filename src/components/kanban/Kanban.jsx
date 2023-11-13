import './Kanban.css'

export function Kanban(){
    return <section id="kanban" className="todo" style={{
    gridtemplatecolumns: 'repeat(4, 1fr)',
    }}>
        <div className="column">
            <h2 className="title">Backlog</h2>
            <ul className="task-list">
                <li id="task_2" className="task-card">
                    <div className="task-actions">
                        <button className="fa fa-trash"></button>
                    </div>
                    <div className="task-title">sadfsdfa</div>
                    <div className="task-desc">sadfsdfa</div>
                    <div className="task-tags"><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sadfsda</div></div>
                    <div className="task-deadline">sadfsadf</div>
                </li>
                <li id="task_3" className="task-card">
                    <div className="task-actions">
                        <button className="fa fa-trash"></button>
                    </div>
                    <div className="task-title">sadfsadf</div>
                    <div className="task-desc">asfdsafd</div>
                    <div className="task-tags"><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sad</div><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sadfsdaf</div><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sadf</div><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sdfsafd</div></div>
                    <div className="task-deadline">sadfsadfasdf</div>
                </li>
                <li id="task_4" className="task-card">
                    <div className="task-actions">
                        <button className="fa fa-trash"></button>
                    </div>
                <div className="task-title">dfgd</div>
                <div className="task-desc">dsfgdsfg</div>
                <div className="task-tags"><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>dfg</div></div>
                <div className="task-deadline">dsfgdfg</div>
                </li>
            </ul>
        </div>
        <div className="column">
            <h2 className="title">Todo</h2>
            <ul className="task-list">
    
                </ul>
        </div>
        <div className="column">
            <h2 className="title">In progress</h2>
            <ul className="task-list">
    
                </ul>
        </div>
        <div className="column">
            <h2 className="title">Done</h2>
            <ul className="task-list">
    
                </ul>
        </div>
    </section>

}