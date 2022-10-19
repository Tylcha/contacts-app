import React, { useState, useEffect } from 'react'

//state
const initializeDefaultForm = { fullname: '', phone_number: '' };

function Form({ addcontacts, pushcontacts }) {
  const [form, setForm] = useState(initializeDefaultForm);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //submit state with prevstate
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === '' || form.phone_number === '') {
      return false;
    }
    addcontacts([...pushcontacts, form])
    console.log(form)
  }

  //clear search bar
  useEffect(() => {
    setForm(initializeDefaultForm)
  }, [pushcontacts])


  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="fullname" onChange={onChange} value={form.fullname} placeholder="fullname" />
      </div>

      <div>
        <input name="phone_number" onChange={onChange} value={form.phone_number} placeholder="phonenumber" />
      </div>

      <div className='btn'>
        <button>Add</button>

      </div>
    </form>
  )
}

export default Form