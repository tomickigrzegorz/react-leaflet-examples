import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
    display: inline-block;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: salmon;
    &:hover {
      padding-bottom: 5px;
      border-bottom: 1px solid salmon;
    }
`;

const StyleH1 = styled.h1`
  margin: 20px auto;
`;

const NotFound = () => {
  return (
    <div>
      <StyleH1>404 - Not Found!</StyleH1>
      <FlexCenter>
        <NavLink to="/simple-map">
          go home
        </NavLink>
      </FlexCenter>
    </div>
  )
}

export default NotFound;
