import React from "react";
import { useState } from 'react';

const Form = props => {
	const {formSubmit} = props
	const [values, setValues] = useState({
		title: '',
		description: ''
	})

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			formSubmit(values.title, values.description)
		}
	}
	return (
		<form onSubmit={handleSubmit} className="form">
			<input className="input" id='taskTitle' name='title' type='text' placeholder='Enter task title' onChange={handleChange} value={values.title} />
			<textarea id='taskDescription' name='description' placeholder='Enter task description' value={values.description} onChange={handleChange} />
			<button className="submit" type='submit'>Add</button>
		</form>
	)
}

export default Form