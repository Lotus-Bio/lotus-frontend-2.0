import { StyledSubtitleSection } from "./subtitleSection.style";

const SubtitleSection = ({ children, dark }) => {
  return <StyledSubtitleSection dark={dark}>{children}</StyledSubtitleSection>;
};

export default SubtitleSection;
