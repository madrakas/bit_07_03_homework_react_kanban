import style from './Form.module.css';

export function Form(){
    return(
        <form id="task_form" className={style.form}>
        <div className={style.formRow}>
          <label className={style.label} htmlFor="title">Title</label>
          <input id="title" className={style.input} type="text" name="title" required></input>
        </div>
        <div className={style.formRow}>
          <label className={style.label} htmlFor="desc">Description</label>
          <textarea id="desc" className={style.textarea} name="description"></textarea>
        </div>
        <div className={style.formRow}>
          <label className={style.label} htmlFor="deadline">Deadline</label>
          <input id="deadline" className={style.input} type="text" name="deadline"></input>
        </div>
        <div className={style.formRow}>
          <label className={style.label} htmlFor="tags">Tags</label>
          <input id="tags" className={style.input} type="text" name="tags"></input>
        </div>
        <div className={style.formRow}>
          <button className={style.btn} type="submit">Create task</button>
        </div>
      </form>
    );
}