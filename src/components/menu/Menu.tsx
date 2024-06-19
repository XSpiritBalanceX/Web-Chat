import { Box, Badge } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import MessageIcon from "@components/icons/MessageIcon";
import PersonIcon from "@components/icons/PersonIcon";
import SettingIcon from "@components/icons/SettingIcon";
import { translate } from "@i18n";
import "./Menu.scss";

const Menu = () => {
  const { t } = translate("translate", { keyPrefix: "menu" });

  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Box>
      <NavLink to={"/chats"}>
        <Badge badgeContent={3} color="error">
          <MessageIcon
            fill={pathname.includes("chats") ? "#007AFF" : "#CBD9E8"}
          ></MessageIcon>
        </Badge>
      </NavLink>
      <NavLink to={"/contacts"}>
        <PersonIcon
          fill={pathname.includes("contacts") ? "#007AFF" : "#CBD9E8"}
        ></PersonIcon>
      </NavLink>
      <NavLink to={"/settings"}>
        <SettingIcon
          fill={pathname.includes("settings") ? "#007AFF" : "#CBD9E8"}
        ></SettingIcon>
      </NavLink>
    </Box>
  );
};

export default Menu;
