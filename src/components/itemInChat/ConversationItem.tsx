import { useState, useEffect } from "react";
import { Box, Avatar, Button } from "@mui/material";
import { IConversationItemProps } from "./TypesItemInChat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { translate } from "@i18n";
import UsersChat from "./UsersChat";
import moment from "moment";
import "./ItemChat.scss";

const ConversationItem = ({
  user_id,
  user_name,
  user_photo,
  time_activity,
  online,
  messages,
}: IConversationItemProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const [isSelectedMessage, setIsSelectedMessage] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);

  useEffect(() => {
    !selectedMessages.length && setIsSelectedMessage(false);
    // eslint-disable-next-line
  }, [selectedMessages]);

  useEffect(() => {
    setIsSelectedMessage(false);
    setSelectedMessages([]);
    // eslint-disable-next-line
  }, [user_id]);

  const handleCloseSelected = () => {
    setIsSelectedMessage(false);
    setSelectedMessages([]);
  };

  const handleIsSelectedMessage = (value: boolean) => {
    setIsSelectedMessage(value);
    !value && setSelectedMessages([]);
  };

  const handleClickOnMessages = (id: number) => {
    const copyData = selectedMessages.slice();
    if (copyData.includes(id)) {
      const index = copyData.indexOf(id);
      index !== -1 && copyData.splice(index, 1);
    } else {
      copyData.push(id);
    }
    setSelectedMessages(copyData);
  };

  const lastUserActivity = (time: string) => {
    const currentTime = moment();
    const userTime = moment(time);
    const diffTime = currentTime.diff(userTime, "minutes");
    return diffTime < 60
      ? t("onlineMin", { time: diffTime })
      : t("onlineRecen");
  };

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
        {!isSelectedMessage && (
          <Box className="userInformationContent">
            <Box>
              <p className="userName">{user_name}</p>
              {online && <p className="userActivity">{t("online")}</p>}
              {!online && (
                <p className="userActivity">
                  {lastUserActivity(time_activity)}
                </p>
              )}
            </Box>
            <Button type="button" className="moreOptionsButton">
              <MoreHorizIcon />
            </Button>
          </Box>
        )}
        {isSelectedMessage && (
          <Box className="controlsSelectedBox">
            <Button type="button">{t("deleteChat")}</Button>
            <p>{t("selectedMessages", { numbers: selectedMessages.length })}</p>
            <Button type="button" onClick={handleCloseSelected}>
              {t("cancel")}
            </Button>
          </Box>
        )}
      </Box>
      <UsersChat
        messages={messages}
        cbHandleIsSelectedMessage={handleIsSelectedMessage}
        isSelectedMessage={isSelectedMessage}
        cbHandleClickOnMessage={handleClickOnMessages}
        selectedMessages={selectedMessages}
      />
    </Box>
  );
};

export default ConversationItem;
