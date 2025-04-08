import { useEffect } from "react";
import { StyledLoading, Spinner } from "./loading.style";

const Loading = ({ loading }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);
  
  if (!loading) return null;

  return (
    <StyledLoading>
      <Spinner />
    </StyledLoading>
  );
};

export default Loading;
