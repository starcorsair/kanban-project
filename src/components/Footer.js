import React from "react";
import { List_Types, List_Types_Show } from "./List_Types";

function Footer(props) {
    const {tasks} = props;
    return(
        <footer className="footer">
            <div className="footer_info">
                <div className='info'>
            {Object.values(List_Types).map(type => {
					const listTasks = tasks.filter(task => task.status === type)
					if (!listTasks.length) return null;
					return (
						<p className="count" key={List_Types_Show[type]}>{List_Types_Show[type]}: {listTasks.length}</p>
					)
				})}
                </div>
            <p className="info">Kanban board by Lin, 2023</p>
        </div>
            
        </footer>
    )
}

export default Footer;