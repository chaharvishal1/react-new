import React, {useActionState} from 'react';

const Form = ({ props }) => {
  const [message, formAction, pending] = useActionState(submitForm, '');

  async function submitForm (prevState, formData){
    const name = formData.get('name');
    const email = formData.get('email');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if(name && email) {
      return  `Form submitted successfully! Name: ${name}, Email: ${email}`;
    } else {
      return  'Please fill in all fields.';
    }
  }

  return (
    <div className="container">
      <form action={formAction} method="post">
        <input type="text" name="name" placeholder="Name" />
        <br></br>
        <input type="email" name="email" placeholder="Email" />
        <br></br>
        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Form;