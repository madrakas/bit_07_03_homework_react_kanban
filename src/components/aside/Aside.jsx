import './Aside.css';

export function Aside() {
    return (
        <aside id="aside" className="aside">
        <div className="aside-bg"></div>
        <div className="aside-container">
          <header className="aside-header">
            <h2>Add task</h2>
            <button type="button" className="fa fa-times"></button>
          </header>
          <div className="aside-content">
            
            <form id="task_form" className="form">
              <div className="form-row">
                <label className="label" htmlFor="title">Title</label>
                <input id="title" className="input" type="text" name="title" required></input>
              </div>
              <div className="form-row">
                <label className="label" htmlFor="desc">Description</label>
                <textarea id="desc" className="textarea" name="description"></textarea>
              </div>
              <div className="form-row">
                <label className="label" htmlFor="deadline">Deadline</label>
                <input id="deadline" className="input" type="text" name="deadline"></input>
              </div>
              <div className="form-row">
                <label className="label" htmlFor="tags">Tags</label>
                <input id="tags" className="input" type="text" name="tags"></input>
              </div>
              <div className="form-row">
                <button className="btn" type="submit">Create task</button>
              </div>
            </form>
          </div>
        </div>
      </aside>
    );
}