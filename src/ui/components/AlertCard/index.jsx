import {
  Ban,
  CircleAlert,
  CircleCheckBig,
  Clock9,
  X
} from "lucide-react";
import { StyledAlertCard } from "./alertCard.style";
import { useAlertStore } from "@/stores/useAlertStore";


const AlertCard = ({ id, type, title, description, time }) => {
  const { removerAlerta } = useAlertStore();
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

      <button onClick={() => removerAlerta(id)}>
        <X />
      </button>
    </StyledAlertCard>
  );
};

export default AlertCard;
