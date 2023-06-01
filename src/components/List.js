import React from "react";
import { useState } from 'react';
import { List_Types } from "./List_Types";
import Form from "./Form.js"
import { Link } from 'react-router-dom'

const List = (props) => {
    const {type, title, tasks, addNewTask} = props;
	const [isFormVisible, setFormVisible] = useState(false);
    const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

	const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}


    return (
        <div className="task_card">
           <h2 className="task_name">{title}</h2>
			{tasks.length? 
				tasks.map(task =>
					<Link  to={`/tasks/${task.id}`}>
						<div className="task" >{task.title}</div>
					</Link>
					
			) : 
				<p>No tasks added yet</p>
			}
			{type === List_Types.Backlog && <button onClick={handleAddNewClick} className="addButton">+ Add new task</button>}
			{type === List_Types.Backlog && isFormVisible && (
				<Form formSubmit={formSubmit} />
                )}
        </div>
    )
}

export default List;