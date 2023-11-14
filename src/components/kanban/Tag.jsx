import style from './Kanban.module.css';

export function Tag(props){
    return (
        <div className="tag" style={{color: '#f33', backgroundcolor: '#f331'}}>{props.title}</div>
    );
}