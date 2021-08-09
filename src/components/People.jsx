import React from "react";
import Person from "./Person";

const People = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.id} name={person.name} />
      ))}
    </div>
  );
};

export default People;
