const Header = (props) => {
  const { name, age, children } = props;
  console.log(props);

  return (
    <>
      <h2>
        Hello, I am from Header. My name is {name} and my age is {age}
      </h2>
      {children}
    </>
  );
};

export default Header;
