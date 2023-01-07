import { NavLink } from "react-router-dom";
import { DialogType } from "../../../redux/testState";

const DialogItem = (props: DialogType) => {
    return (
      <li>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </li>
    );
  };

  export default DialogItem