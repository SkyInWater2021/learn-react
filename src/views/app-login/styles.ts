import styled from "styled-components"

import coverBg from "@/assets/img/bg-login.jpg"

interface LoginWrapperProps {
  $startColor: string
  $endColor: string
}

export const LoginWrapper = styled.div<LoginWrapperProps>`
  position: absolute;
  inset: 0;
  top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${coverBg});
  background-size: 100% 100%;

  .gradient-animation {
    background: linear-gradient(270deg, ${props => props.$startColor}, ${props => props.$endColor});
    background-size: 400% 400%;
    animation: gradientFlow 5s ease infinite;
  }

  .login-btn {
    width: 100%;
    background-color: ${props => props.$endColor};
    box-shadow: none;
    &:hover {
      background-color: ${props => props.$startColor} !important;
    }
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
