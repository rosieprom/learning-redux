import styled from "styled-components";
import AddTodo from "../components/AddToDo";
import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  padding: 2rem;
  margin: 0, auto;
  justify-content: center;
`;

const Index = ({}) => {
  return (
    <Container>
      <Title>Goals</Title>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </Container>
  );
};

export default Index;
