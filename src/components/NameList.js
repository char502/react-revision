import React from "react";
import styled from "styled-components";
import Person from "./Person";

const NameListContainerDiv = styled.div`
  text-align: center;
`;

const NameListContainer = () => {
  const Names = ["Ben", "Angie", "Graham", "Bill", "Sarah", "Ben"];

  const persons = [
    { id: 1, name: "Ben", age: 25, skill: "Angular" },
    { id: 2, name: "Angie", age: 32, skill: "React" },
    { id: 3, name: "Sarah", age: 45, skill: "Vue" }
  ];
  let result = persons.map((person) => (
    <div key={person.id}>
      <Person personData={person} />
    </div>
  ));

  let ArrayResult = Names.map((person, index) => (
    <div key={index}>{person}</div>
  ));

  return <NameListContainerDiv>{ArrayResult}</NameListContainerDiv>;
};

export default NameListContainer;
