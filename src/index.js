import React from "react";
import {render} from "react-dom";
import Header from "./components/Header.js"
import KanbanRoutes from "./components/KanbanRoutes.js"
import Footer from "./components/Footer.js"
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

    const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
    const [tasks, setTasks] = useState(initialState)
  
      useEffect(() => {
          window.localStorage.setItem('tasks', JSON.stringify(tasks))
      }, [tasks])
  
    return (
      <BrowserRouter>
      <div>
        <Header/>
              <KanbanRoutes tasks={tasks} setTasks={setTasks} />
              <Footer tasks={tasks} />
      </div>
      </BrowserRouter>
    );
  }
  

render(<App/>, document.getElementById('root'));