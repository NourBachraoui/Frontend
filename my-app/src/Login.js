import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the form data to a backend API or handle it in some other way
    console.log('Form submitted:', { email, password });
  };

  return (
    <div>
    
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>Enter your email and password below</p>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <input type="Submit" value="Log In" />
      </form>
    </div>
  );
}

export default Login;