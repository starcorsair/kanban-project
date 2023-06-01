import React from "react";
import List from "./List.js";
import { List_Types, List_Types_Show } from "./List_Types";
import uniqid from 'uniqid';


const Card = (props) => {
    const {tasks, setTasks} = props;
    const addNewTask = (title, description) => {
		const task = {
			id: uniqid(),
			title,
			description,
			created: new Date().toISOString(),
			status: 'backlog',
		}

		setTasks([...tasks, task]);
	}

	return (
        <div className="cards_background">
		<div className="card_wrapper">
		{
			Object.values(List_Types).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List
						key={List_Types_Show[type]}
						type={type}
						title={List_Types_Show[type]}
						tasks={listTasks || []}
						addNewTask={addNewTask}
					/>
				)
			})
		}
		</div>
        </div>
	)
}



export default Card;