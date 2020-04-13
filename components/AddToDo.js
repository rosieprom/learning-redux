import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomInput = styled.input`
  padding: 4rem 5rem;
  margin: 1rem;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  font-family: "FiraSans";
  font-size: 3rem;
`;

const CustomButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  width: 20vw;

  display: inline-block;
  padding: 15px 20px;
  position: relative;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <Container>
        <CustomInput
          placeholder="What goals?"
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <CustomButton onClick={this.handleAddTodo}>Add Goal</CustomButton>
      </Container>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
