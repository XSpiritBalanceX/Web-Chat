import { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { IControlsChatProps } from "./TypesItemInChat";
import { translate } from "@i18n";
import ClipIcon from "@components/icons/ClipIcon";
import BucketIcon from "@components/icons/BucketIcon";
import ArrowRightIcon from "@components/icons/ArrowRightIcon";
import SendIcon from "@mui/icons-material/Send";
import RecordingButton from "@components/buttons/RecordingButton";
import "./ItemChat.scss";

const ControlsChat = ({
  isSelectedMessage,
  cbHandleAddMessage,
  cbHandleDeleteMessages,
  cbHandleResendMessages,
}: IControlsChatProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    isSelectedMessage && setNewMessage("");
    // eslint-disable-next-line
  }, [isSelectedMessage]);

  useEffect(() => {
    !newMessage && setIsTyping(false);
    newMessage && setIsTyping(true);
    // eslint-disable-next-line
  }, [newMessage]);

  const handleAddNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.currentTarget.value);
  };

  const handleAddMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && newMessage) {
      cbHandleAddMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleAddMessageButton = () => {
    if (newMessage) {
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

  const handleAddVoiceMessage = (message: Blob) => {
    cbHandleAddMessage(message);
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
          {!isTyping && (
            <RecordingButton cbHandleAddVoiceMessage={handleAddVoiceMessage} />
          )}
          {isTyping && (
            <Button type="button" onClick={handleAddMessageButton}>
              <SendIcon />
            </Button>
          )}
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
