import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import CloseIcon from "@mui/icons-material/Close";
import MarkedMessageIcon from "@components/icons/MarkedMessageIcon";
import SoundOffIcon from "@components/icons/SoundOffIcon";
import BucketIcon from "@components/icons/BucketIcon";
import "./Modals.scss";

interface IChatItemModalProps {
  chat_id: number;
  cbHandleCloseModal: () => void;
}

const ChatItemModal = ({
  chat_id,
  cbHandleCloseModal,
}: IChatItemModalProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const handleMark = () => {
    console.log("mark chat", chat_id);
  };

  const handleCloseNotification = () => {
    console.log("close notification", chat_id);
  };

  const handleDeleteChat = () => {
    console.log("delete chat", chat_id);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cbHandleCloseModal();
  };

  return (
    <Box className="chatItemModalBox">
      <Button
        type="button"
        onClick={handleCloseModal}
        className="closeChatItemModalButton"
      >
        <CloseIcon />
      </Button>
      <Button type="button" onClick={handleMark}>
        <MarkedMessageIcon fill="#000000" />
        {t("markAsUnread")}
      </Button>
      <Button type="button" onClick={handleCloseNotification}>
        <SoundOffIcon fill="#000000" />
        {t("turnOffNotif")}
      </Button>
      <Button
        type="button"
        onClick={handleDeleteChat}
        className="deleteItemChatButton"
      >
        <BucketIcon fill="#C92727" />
        {t("deleteChat")}
      </Button>
    </Box>
  );
};

export default ChatItemModal;
