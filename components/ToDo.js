import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import styled from "styled-components";

const ListItem = styled.li`
  text-align: center;
  text-decoration: none;
`;

const Text = styled.h1`
  font-weight: 600;
`;

const Todo = ({ todo, toggleTodo }) => (
  <ListItem onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "Completed" : "Incompleted"}{" "}
    <Text
      className={
        ("todo-item__text",
        todo && todo.completed && "todo-item__text--completed")
      }
    >
      {todo.content}
    </Text>
  </ListItem>
);

export default connect(null, { toggleTodo })(Todo);
