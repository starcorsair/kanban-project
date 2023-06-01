import React from "react";
import User from "./User.js"

function Header() {
    return(
        <header className="header">
            <h1 className="heading">Awesome Kanban Board</h1>
            <User />
        </header>
    )
}

export default Header;