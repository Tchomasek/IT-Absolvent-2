import { Button } from "react-bootstrap";
import styled from "styled-components";

type todoProps = {
  id: number;
  text: string;
  completed: boolean;
  handleCheckboxToggle: any;
  handleDelete: any;
  handleTextChange: any;
  enableEdit: boolean;
  enableEditToggle: any;
};

const TodoItem = ({
  id,
  text,
  completed,
  enableEdit,
  handleCheckboxToggle,
  handleDelete,
  handleTextChange,
  enableEditToggle,
}: todoProps) => {
  const textStyle = completed ? { textDecoration: "line-through" } : {};
  return (
    <TodoItemDiv className="todo-item">
      <CheckboxInput
        type="checkbox"
        checked={completed}
        onChange={() => handleCheckboxToggle(id)}
      />
      {enableEdit ? (
        <TextInput
          type="text"
          autoFocus
          value={text}
          onChange={(e) => handleTextChange(e, id)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === "Escape") {
              enableEditToggle(id);
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        />
      ) : (
        <TextP
          style={textStyle}
          onClick={() => handleCheckboxToggle(id)}
          onDoubleClick={() => enableEditToggle(id)}
        >
          {text}
        </TextP>
      )}
      <div>
        <LeftButton variant="secondary" onClick={() => enableEditToggle(id)}>
          Edit
        </LeftButton>
        <RightButton
          variant="outline-secondary"
          value={id}
          onClick={handleDelete}
        >
          Delete
        </RightButton>
      </div>
    </TodoItemDiv>
  );
};

const LeftButton = styled(Button)`
  border-radius: 10px 0px 0px 10px;
`;

const RightButton = styled(Button)`
  border-radius: 0px 10px 10px 0px;
`;
const TodoItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: auto;
`;

const CheckboxInput = styled.input`
  display: none;
  height: 30px;
  width: 30px;
`;

const TextInput = styled.input`
  font-size: 40px;
  border: none;
  border-bottom: 2px solid black;
  background-color: #b2bdbd;
`;

const TextP = styled.p`
  font-size: 40px;
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

export default TodoItem;
