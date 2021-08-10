import React, { useState } from "react";

function App() {
  const formValues = {
    name: "",
    email: "",
    password: "",
  };
  const [values, setValues] = useState(formValues);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
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
    </div>
  );
}

export default App;
