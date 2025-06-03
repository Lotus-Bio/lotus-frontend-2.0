import { StyledUserInfo } from "./userInfo.style";
import { Mail } from "lucide-react";

const UserInfo = ({ name, email }) => {
  function getInitials(string) {
    if (!string) return "";
    const words = string.trim().split(" ");
    if (words.length >= 2) {
      return words[0][0].toUpperCase() + words[1][0].toUpperCase();
    }
    return words[0][0].toUpperCase();
  }

  const inicial = getInitials(name);

  return (
    <StyledUserInfo>
      <div className="circulo">
        <p>{inicial}</p>
      </div>
      <div>
        <h3>{name || "Usuário"}</h3>
        <p>
          <Mail size={14} />
          {email || "sem email"}
        </p>
      </div>
    </StyledUserInfo>
  );
};

export default UserInfo;
