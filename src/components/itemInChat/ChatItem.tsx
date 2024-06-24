import { useState } from "react";
import { Box, Avatar, Badge } from "@mui/material";
import { IChatItemProps, TMessage } from "./TypesItemInChat";
import moment from "moment";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import ChatItemModal from "@components/modals/ChatItemModal";
import "./ItemChat.scss";

const ChatItem = ({
  id,
  conversation_index,
  user_name,
  user_photo,
  messages,
  isSelected,
}: IChatItemProps) => {
  const navigate = useNavigate();

  const [isShowModal, setIsShowModal] = useState(false);

  const lastMessage = messages[messages.length - 1];
  const allowMessageLength = 114;

  const mockUserID = 1;

  const lastMessageFromUser = messages.reduce<TMessage | null>((prev, curr) => {
    return curr.user === 1 ? curr : prev;
  }, null);

  const messagesAfterLastUser = lastMessageFromUser
    ? messages
        .slice(messages.indexOf(lastMessageFromUser) + 1)
        .filter((message) => message.user !== 1 && !message.is_read)
    : [];

  const chatItemBoxClass: string = classNames("chatItemBox", {
    selectedChatBox: isSelected,
  });

  const handleSelectChat = () => {
    navigate(`/chats/${conversation_index + 1}`);
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <Box onContextMenu={handleRightClick} className="wrapperChatItem">
      {isShowModal && (
        <ChatItemModal chat_id={id} cbHandleCloseModal={handleCloseModal} />
      )}
      <Box onClick={handleSelectChat} className={chatItemBoxClass}>
        {user_photo && (
          <Avatar src={user_photo} alt="user" className="userPhoto" />
        )}
        {!user_photo && (
          <Box className="userInitialBox">{user_name.charAt(0)}</Box>
        )}
        <Box className="messageInformation">
          <Box className="nameTimeBox">
            <Box className="nameCountBox">
              <p className="userName">{user_name}</p>
              {messagesAfterLastUser && (
                <Badge
                  badgeContent={messagesAfterLastUser.length}
                  className="countOfMessages"
                />
              )}
            </Box>
            <Box className="timeBox">
              {lastMessage.id !== mockUserID && lastMessage.is_read && (
                <DoneAllIcon />
              )}
              <p>{moment(lastMessage.time).format("HH:mm")}</p>
            </Box>
          </Box>
          <p className="messageText">
            {lastMessage.message.length > allowMessageLength
              ? `${lastMessage.message.slice(0, allowMessageLength)}...`
              : lastMessage.message}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatItem;
