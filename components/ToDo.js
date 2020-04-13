import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import styled from "styled-components";

const ListItem = styled.li`
  text-align: center;
  text-decoration: none;
`;

const Text = styled.h1`
  font-weight: 600;
  font-family: "FiraSans";
`;

const Todo = ({ todo, toggleTodo }) => (
  <ListItem onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? (
      <s>
        <Text>{todo.content}</Text>
      </s>
    ) : (
      <Text>{todo.content}</Text>
    )}
  </ListItem>
);

export default connect(null, { toggleTodo })(Todo);
