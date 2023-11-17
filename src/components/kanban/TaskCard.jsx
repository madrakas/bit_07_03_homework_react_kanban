import { useState } from 'react';
import style from './Kanban.module.css';
import { Tag } from './Tag';

export function TaskCard({ data }) {
    const { title, description, deadline, tags } = data;
    // const tags = props.tags;
    // const { tags } =props;

    /*     const tagsList =[];

    for (const tag of tags){
        tagsList.push(<Tag title={tag} />);
        }*/
    
    const tagsList = tags.map((tag, idx) => <Tag key={idx} title={tag}/>);

    return(
        <li id="task_2" className={style.taskCard}>
                    <div className={style.taskActions}>
                        <button className={style.btn + " fa fa-trash"}>Del</button>
                    </div>
                    <div className={style.taskTitle}>{title}</div>
                    <div className={style.taskDesc}>{description}</div>
                    <div className={style.taskTags}>{tagsList}</div>
                    <div className={style.taskDeadline}>{deadline}</div>
                </li>
    );
}