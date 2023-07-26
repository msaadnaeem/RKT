import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../features/users/usersSlice";
const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button className="clear-btn" onClick={() => dispatch(deleteAllUsers())}>
        DeleteAllUsers
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    color: #ff0000; /* Replace this with your desired color */
    font-size: 16px;
    margin-top: 10px;
  }
`;

export default DeleteAllUsers;
