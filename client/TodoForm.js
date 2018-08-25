import React from 'react'

export default function TodoForm({submit, change, name, assignee, serverE}){
	const warning = !name ? <span className='warning'>Come on, you NEED this field!</span> : ''
	const serverError = serverE===true ? <div className='error'>Yikes!</div> : ''
	return(
	  <form onSubmit={submit}>
        <label htmlFor='taskName'>Task Name:

        </label>
        <input type='text' name='taskName' value={name} onChange={change}></input>
        {warning}
        <label htmlFor='assignee'>Assignee</label>
        <input type='text' name='assignee' value={assignee} onChange={change}></input>
        <button type='submit' disabled={name && assignee ? false : true}>Submit</button>
        {serverError}
      </form>
	)
}