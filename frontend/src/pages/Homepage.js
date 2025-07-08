import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Students from "../assets/students.svg";

// ✅ Make sure this is added in your public/index.html:
// <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

const Homepage = () => {
    return (
        <PageWrapper>
            <BackgroundGlow />

            <LeftSide>
                <Illustration src={Students} alt="students" />
            </LeftSide>

            <RightSide>
                <GradientOverlay />
                <Blob style={{ top: '15%', left: '10%' }} />
                <Blob style={{ bottom: '20%', right: '25%' }} />
                <Blob style={{ top: '60%', left: '60%' }} />

                <Content>
                    <BrandName>Bridgeway</BrandName>
                    <WelcomeText>Welcome</WelcomeText>
                    <Description>
                        A modern platform for smarter education. Stay connected, stay organized, stay ahead.
                    </Description>

                    <ActionButtons>
                        <StyledLink to="/choose">
                            <PrimaryButton>Login</PrimaryButton>
                        </StyledLink>
                        <StyledLink to="/chooseasguest">
                            <SecondaryButton>Login as Guest</SecondaryButton>
                        </StyledLink>
                        <BottomText>
                            Don’t have an account?{' '}
                            <Link to="/Adminregister" style={{ color: "#1a73e8", textDecoration: "underline" }}>
                                Sign up
                            </Link>
                        </BottomText>
                    </ActionButtons>
                </Content>
            </RightSide>
        </PageWrapper>
    );
};

export default Homepage;

// 🔮 Styled Components Below

const blobAnimation = keyframes`
  0% {
    transform: scale(1) translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.15) translateY(-10px);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 0.6;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(124, 58, 237, 0.1), transparent 70%);
  z-index: 0;
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #e0eafc, #cfdef3);
  z-index: 1;
  opacity: 0.4;
`;

const Blob = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: #a78bfa;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  animation: ${blobAnimation} 9s ease-in-out infinite;
  z-index: 1;
`;

const LeftSide = styled.div`
  flex: 1;
  background-color: #f2f6fd;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const RightSide = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
`;

const Content = styled.div`
  z-index: 3;
  padding: 40px;
  max-width: 600px;
  text-align: center;
`;

const Illustration = styled.img`
  width: 90%;
  max-width: 500px;
  height: auto;
`;

const BrandName = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 3.7rem;
  color: #7f56da;
  margin: 0;
  text-shadow: 0 0 10px rgba(127, 86, 218, 0.2);
`;

const WelcomeText = styled.h2`
  font-size: 1.9rem;
  color: #222;
  margin-top: 12px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin: 25px auto 40px;
  max-width: 480px;
  line-height: 1.7;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const PrimaryButton = styled.button`
  padding: 14px;
  font-size: 1rem;
  background-color: #7f56da;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #6b45c7;
  }
`;

const SecondaryButton = styled.button`
  padding: 14px;
  font-size: 1rem;
  background-color: transparent;
  color: #7f56da;
  border: 2px solid #7f56da;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f0ff;
  }
`;

const BottomText = styled.p`
  font-size: 0.95rem;
  color: #444;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;