import {
  Ban,
  CircleAlert,
  CircleCheckBig,
  Clock9,
} from "lucide-react";
import { StyledAlertCard } from "./alertCard.style";

const AlertCard = ({ type, title, description, time }) => {
  let Icon;

  if (type === "error") {
    Icon = Ban;
  }
  if (type === "warning") {
    Icon = CircleAlert;
  }
  if (type === "success") {
    Icon = CircleCheckBig;
  }

  return (
    <StyledAlertCard $type={type}>
      {Icon && <Icon size={24} />}

      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span><Clock9 size={14} />{time}</span>
      </div>
    </StyledAlertCard>
  );
};

export default AlertCard;
