import style from './Kanban.module.css';

export function Kanban(){
    return <section id="kanban" className={style.todo} style={{
    gridtemplatecolumns: 'repeat(4, 1fr)',
    }}>
        <div className={style.column}>
            <h2 className={style.title + ' normal undeline'}>Backlog</h2>
            <ul className={style.taskList}>
                <li id="task_2" className={style.taskCard}>
                    <div className={style.taskActions}>
                        <button className={style.btn}>Del</button>
                        {/* <button className="fa fa-trash"></button> */}
                    </div>
                    <div className={style.taskTitle}>sadfsdfa</div>
                    <div className={style.taskDesc}>sadfsdfa</div>
                    <div className={style.taskTags}><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sadfsda</div></div>
                    <div className={style.taskDeadline}>sadfsadf</div>
                </li>
                <li id="task_3" className={style.taskCard}>
                    <div className={style.taskActions}>
                        <button className={style.btn}>Del</button>
                        {/* <button className="fa fa-trash"></button> */}
                    </div>
                    <div className={style.taskTitle}>sadfsadf</div>
                    <div className={style.taskDesc}>asfdsafd</div>
                    <div className={style.taskTags}><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sad</div><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sadfsdaf</div><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sadf</div><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>sdfsafd</div></div>
                    <div className={style.taskDeadline}>sadfsadfasdf</div>
                </li>
                <li id="task_4" className={style.taskCard}>
                    <div className={style.taskActions}>
                        <button className={style.btn}>Del</button>
                        {/* <button className="fa fa-trash"></button> */}
                    </div>
                <div className={style.taskTitle}>dfgd</div>
                <div className={style.taskDesc}>dsfgdsfg</div>
                <div className={style.taskTags}><div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>dfg</div></div>
                <div className={style.taskDeadline}>dsfgdfg</div>
                </li>
            </ul>
        </div>
        <div className={style.column}>
            <h2 className={style.title}>Todo</h2>
            <ul className={style.taskList}>
    
                </ul>
        </div>
        <div className={style.column}>
            <h2 className={style.title}>In progress</h2>
            <ul className={style.taskSList}>
    
                </ul>
        </div>
        <div className={style.column}>
            <h2 className={style.title}>Done</h2>
            <ul className={style.taskList}>
    
                </ul>
        </div>
    </section>

}