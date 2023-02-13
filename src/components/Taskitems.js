import "./Taskitems.css"
function Taskitems(prop) {
    // const taskdate = new Date(2023, 2, 5);
    // const taskTittle = "Blockchain Course";
    // const priority = 1;
    

    return (<div className="task-item">
        <div >{prop.abc.toISOString()}</div>
        <div className="task-item__description">
            <h2>{prop.def}</h2>
            <div className="task-item__priority">{prop.ghi}</div>
        </div>
    </div>
    );
}
export default Taskitems;                