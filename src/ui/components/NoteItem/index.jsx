import { StyledNoteItem } from "./noteItem.style";

const NoteItem = ({ label }) => {
  return (
    <StyledNoteItem>
      <input type="checkbox" name="" id="" checked />
      {label}
    </StyledNoteItem>
  );
};

export default NoteItem;
