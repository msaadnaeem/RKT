import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { deleteUser } from "../features/users/usersSlice";

const DisplayUsers = () => {
  const users = useSelector((state) => state.users.usersDB);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <StyledDeleteIcon onClick={() => dispatch(deleteUser(user.id))} />
        </li>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

const StyledDeleteIcon = styled(MdDeleteForever)`
  font-size: 24px;
  color: #ff0000;
  cursor: pointer;
  &:hover {
    color: #cc0000; 
  }
`;
export default DisplayUsers;
