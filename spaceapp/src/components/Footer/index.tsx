import React from "react";
import { styled } from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const StyledIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
`;

const StyledFooter = styled.footer`
  background-color:#04244F;;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
  }
`;

function Icons() {
  return (
    <StyledIcons>
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </StyledIcons>
  );
}

function Footer() {
  return (
    <StyledFooter>
      <Icons />
      <p>developed by Kin Ishii</p>
    </StyledFooter>
  );
}

export default Footer;
