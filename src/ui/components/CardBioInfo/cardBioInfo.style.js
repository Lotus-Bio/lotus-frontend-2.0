import styled from "styled-components";

export const StyledCardBioInfo = styled.div`
  border: 1px solid rgb(243, 244, 246);
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem;
  border-radius: 0.75rem;

  width: 100%;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

export const BlockAlign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`;

export const Icon = styled.div`
  background: rgb(240, 253, 244);
  width: 36px;
  height: 36px;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: rgb(22, 163, 74);
    width: 20px;
    height: 20px;
  }
`;

export const Tag = styled.span`
  background: rgb(240, 253, 244);
  color: rgb(22, 163, 74);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
`;

export const Title = styled.h3`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 1.25rem;
`;

export const Value = styled.p`
  color: rgb(22, 163, 74);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: bold;
`;
