import { Box } from "@mui/material";
import { IUsersChatProps } from "./TypesItemInChat";
import moment from "moment";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckIcon from "@mui/icons-material/Check";
import "./ItemChat.scss";

const UsersChat = ({
  messages,
  cbHandleIsSelectedMessage,
  cbHandleClickOnMessage,
  selectedMessages,
  isSelectedMessage,
}: IUsersChatProps) => {
  const mockUserID = 1;

  const handleClickOnMessage = (id: number) => {
    cbHandleIsSelectedMessage(true);
    cbHandleClickOnMessage(id);
  };

  return (
    <Box className="conversationBox">
      {messages.map((el) => (
        <Box
          key={el.id}
          className={`messageItemBox ${
            el.user === mockUserID ? "rightMessageBox" : "leftMessageBox"
          }`}
          onClick={() => handleClickOnMessage(el.id)}
        >
          <Box className="messageBox">
            <p className="messageText">{el.message}</p>
            <Box className="messageTimeReadBox">
              <p className="messageTime">{moment(el.time).format("HH:mm")}</p>
              {el.is_read && <DoneAllIcon />}
            </Box>
          </Box>
          {isSelectedMessage &&
            (selectedMessages.includes(el.id) ? (
              <Box className="selectedMessageIdentifier">
                <CheckIcon />
              </Box>
            ) : (
              <Box className="messageIdentifier" />
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default UsersChat;
