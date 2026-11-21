
"use client";

import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f7f4;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #334a42;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>온유피부과</Title>
    </Container>
  );
}
