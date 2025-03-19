import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: rgb(17, 24, 39);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Description = styled.p`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1%.25;
`;

export const Tag = styled.span`
  background: rgb(240, 253, 244);
  color: rgb(22, 163, 74);
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const BlockBioInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const UserInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: #ccc;
`;
