import React from 'react';
import useForm from '../../useForm';
function Form() {
  // Define your state schema
  const stateSchema = {
    fname: { value: '', error: '' },
    lname: { value: '', error: '' },
    phone: { value: '', error: '' },
    email: { value: '', error: '' },
    message: { value: '', error: '' }
  };
// Define your validationStateSchema
  // Note: validationStateSchema and stateSchema property
  // should be the same in-order validation works!

 
  const validationStateSchema = {
    fname: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: 'Invalid name format.',
      },
    },
    lname: {
        required: true,
        validator: {
          regEx: /^[a-zA-Z]+$/,
          error: 'Invalid name format.',
        },
      },
    phone: {
      required: true,
      validator: {
        regEx: /^[0-9]{10}$/,
        error: 'Invalid number format.',
      },
    },
    email: {
      required: true,
      validator: {
        regEx: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        error: 'Invalid number format.',
      },
    },
    message:{
        required:true,
        validator:{
            regEx: /^[a-z A-Z]+$/,
            error: 'Invalid message.',
      }
    }
  };
function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }
const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );
const errorStyle = {
    color: 'red',
    fontSize: '13px',
  };
return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="fields">
    <div className="field">
        
          <label htmlFor="fname">
            First name:
            <input
              type="text"
              name="fname"
              value={state.fname.value}
              onChange={handleOnChange}
            />
          </label>
          
          {state.fname.error && <p style={errorStyle}>{state.fname.error}</p>}
        </div>
        <div className="field">
          <label htmlFor="lname">
            Last name:
            <input
              type="text"
              name="lname"
              value={state.lname.value}
              onChange={handleOnChange}
            />
          </label>
          {state.lname.error && <p style={errorStyle}>{state.lname.error}</p>}
        </div>
    <div className="field">
          <label htmlFor="phone">
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={state.phone.value}
              onChange={handleOnChange}
            />
          </label>
          {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
        </div>
    <div className="field">
          <label htmlFor="email">
           Email:
            <input
              type="text"
              name="email"
              value={state.email.value}
              onChange={handleOnChange}
            />
          </label>
          {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
        </div>
    <div className="field">
          <label htmlFor="message">
            Message:
            {/* <input
              type="text"
              name="message"
              value={state.message.value}
              onChange={handleOnChange}
            /> */}
            <textarea name="message" id="message" rows="3" value={state.message.value}
              onChange={handleOnChange}/>
          </label>
          {state.message.error && <p style={errorStyle}>{state.message.error}</p>}
        </div>






<input type="submit" name="submit" disabled={disable} />
</div>
      </form>
    </div>
  );




}


export default Form;