import { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { IControlsChatProps } from "./TypesItemInChat";
import { translate } from "@i18n";
import ClipIcon from "@components/icons/ClipIcon";
import MicrophoneIcon from "@components/icons/MicrophoneIcon";
import BucketIcon from "@components/icons/BucketIcon";
import ArrowRightIcon from "@components/icons/ArrowRightIcon";
import "./ItemChat.scss";

const ControlsChat = ({
  isSelectedMessage,
  cbHandleAddMessage,
  cbHandleDeleteMessages,
  cbHandleResendMessages,
}: IControlsChatProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    isSelectedMessage && setNewMessage("");
    // eslint-disable-next-line
  }, [isSelectedMessage]);

  const handleAddNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.currentTarget.value);
  };

  const handleAddMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && newMessage) {
      cbHandleAddMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleDeleteMessages = () => {
    cbHandleDeleteMessages();
  };

  const handleResendMessages = () => {
    cbHandleResendMessages();
  };

  return (
    <Box className="controlsChatBox">
      {!isSelectedMessage && (
        <Box className="controlsNewMessageBox">
          <Button type="button">
            <ClipIcon fill="#007AFF" />
          </Button>
          <TextField
            value={newMessage}
            onChange={handleAddNewMessage}
            placeholder={t("message")}
            onKeyDown={handleAddMessage}
            className="newMessageField"
          />
          <Button type="button">
            <MicrophoneIcon fill="#007AFF" />
          </Button>
        </Box>
      )}
      {isSelectedMessage && (
        <Box className="controlsSelectedChatBox">
          <Button
            type="button"
            className="deleteMessageButton"
            onClick={handleDeleteMessages}
          >
            <BucketIcon fill="#007AFF" width={23} height={25} />
          </Button>
          <Button type="button" onClick={handleResendMessages}>
            <ArrowRightIcon fill="#007AFF" />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ControlsChat;
