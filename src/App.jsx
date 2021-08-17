import React, { useState } from "react";

function App() {
  const formValues = {
    name: "",
    email: "",
    password: "",
  };
  const [values, setValues] = useState(formValues);
  const [isLoading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    if(!values.name) {
      alert('Please enter your full name');
      setLoading(false);
      return;
    } else if(!values.email) {
      alert('Please enter your email');
      setLoading(false);
      return;
    }

    setValues({
      name: "",
      email: "",
      password: "",
    });

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      <button type="submit" disabled={isLoading}>{isLoading ? `Submitting...` : "Submit"}</button>
    </form>
  );
}

export default App;
