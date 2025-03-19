import { StyledLoading, Spinner } from "./loading.style";

const Loading = ({ loading }) => {
  if (!loading) return null;

  return (
    <StyledLoading>
      <Spinner />
    </StyledLoading>
  );
};

export default Loading;
