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

  return (
    <Box className="menuContainer">
      <Box className="menuContentBox">
        <Box className="linksBox">
          <NavLink
            to={"/chats/1"}
            className={() =>
              pathname.includes("chats") ? "nav-link active" : "nav-link"
            }
          >
            <Badge badgeContent={5} color="error">
              <MessageIcon
                fill={pathname.includes("chats") ? "#007AFF" : "#CBD9E8"}
              ></MessageIcon>
            </Badge>
            {t("chats")}
          </NavLink>
          <NavLink
            to={"/contacts"}
            className={() =>
              pathname.includes("contacts") ? "nav-link active" : "nav-link"
            }
          >
            <PersonIcon
              fill={pathname.includes("contacts") ? "#007AFF" : "#CBD9E8"}
            ></PersonIcon>
            {t("contacts")}
          </NavLink>
          <NavLink
            to={"/settings"}
            className={() =>
              pathname.includes("settings") ? "nav-link active" : "nav-link"
            }
          >
            <SettingIcon
              fill={pathname.includes("settings") ? "#007AFF" : "#CBD9E8"}
            ></SettingIcon>
            {t("settings")}
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
