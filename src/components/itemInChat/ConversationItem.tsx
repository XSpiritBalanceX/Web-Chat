import { Box, Avatar, Button } from "@mui/material";
import { IConversationItemProps } from "./TypesItemInChat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { translate } from "@i18n";
import "./ItemChat.scss";

const ConversationItem = ({
  user_id,
  user_name,
  user_photo,
  messages,
}: IConversationItemProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  return (
    <Box className="conversationContainer">
      <Box className="userInformationBox">
        {user_photo && (
          <Avatar
            src={user_photo}
            alt="user"
            className="userPhotoInConversation"
          />
        )}
        {!user_photo && (
          <Box className="userInitialConversation">{user_name.charAt(0)}</Box>
        )}
        <Box className="userInformationContent">
          <Box>
            <p className="userName">{user_name}</p>
            <p className="userActivity">была в сети</p>
          </Box>
          <Button type="button" className="moreOptionsButton">
            <MoreHorizIcon />
          </Button>
        </Box>
      </Box>
      <Box className="conversationBox"></Box>
    </Box>
  );
};

export default ConversationItem;
