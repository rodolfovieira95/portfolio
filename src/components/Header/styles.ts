import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 0 30px;
`;

export const HomeLink = styled.a`
  color: #08b6e1;
`;

export const List = styled.ul`
  color: #08b6e1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const ListItem = styled.li`
  float: left;
  a {
    padding: 16px;
  }
`;
