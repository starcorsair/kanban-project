import React from "react";
import Card from "./Card.js";
import TaskDetail from "./TaskDetail.js";
import { Routes, Route } from "react-router-dom";

const KanbanRoutes = (props) => {


	return (
		
		<main className="kanban-routes">
			<Routes>
				<Route exact path={'/'} element ={<Card {...props}/>}/>
				<Route path={'/tasks/:taskId'} element={<TaskDetail {...props}/>}/>
			</Routes>
		</main>
		
	)
}

export default KanbanRoutes;