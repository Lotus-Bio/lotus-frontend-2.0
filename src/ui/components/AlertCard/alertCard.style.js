import styled from "styled-components";

export const StyledAlertCard = styled.div`
  border: 1px solid ${({ $type }) =>
    $type === "error" ? "#87565F" :
      $type === "warning" ? "#CEB792" :
        $type === "success" ? "#5C856C" :
          "#6B7280"};

  background-color: ${({ $type }) =>
    $type === "error" ? "#1D111D" :
      $type === "warning" ? "#202016" :
        $type === "success" ? "#0C1D1D" :
          "#6B7280"}; 

  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    color: ${({ $type }) =>
    $type === "error" ? "#EF4444" :
      $type === "warning" ? "#FACC15" :
        $type === "success" ? "#22C55E" :
          "#6B7280"}; 
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: .5rem;
    color: ${({ $type }) =>
    $type === "error" ? "#EF4444" :
      $type === "warning" ? "#FACC15" :
        $type === "success" ? "#22C55E" :
          "#6B7280"}; 
  }

  p, span {
    color: ${({ $type }) =>
    $type === "error" ? "#A73348" :
      $type === "warning" ? "#795E18" :
        $type === "success" ? "#246F37" :
          "#6B7280"};
  }

  span {
    font-size: 0.875rem;
    margin-top: .5rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;
