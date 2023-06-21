import styled from "styled-components";

export const MenuVertical = styled.nav`
    flex-basis: 200px;
    border-right: rgb(241, 194, 123) solid;
    border-right-width: thin;
li {
    list-style-type: none;
    color:rgb(96, 108, 93);
    margin-top:5px;
}

> ul hr {
    color:rgb(241, 194, 123);
}
`