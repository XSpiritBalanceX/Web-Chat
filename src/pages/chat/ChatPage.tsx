import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import ControlsChatList from "./ControlsChatList";
import ChatItem from "@components/itemInChat/ChatItem";
import ConversationItem from "@components/itemInChat/ConversationItem";
import "./ChatPage.scss";

type TMessage = {
  id: number;
  user: number;
  message: string;
  time: string;
  is_read: boolean;
};

interface IItemInListOfChats {
  id: number;
  name: string;
  photo: string;
  activity: string;
  online: boolean;
  messages: TMessage[];
}

const mockData = [
  {
    id: 2,
    name: "Paul",
    photo: "https://www.kino-teatr.ru/acter/album/52909/929591.jpg",
    activity: "2024-19-06 13:45",
    online: true,
    messages: [
      {
        id: 1,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 2,
        user: 1,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 3,
        user: 2,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:45",
        is_read: true,
      },
      {
        id: 4,
        user: 2,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:47",
        is_read: true,
      },
      {
        id: 5,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:52",
        is_read: true,
      },
      {
        id: 6,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:42",
        is_read: true,
      },
      {
        id: 7,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:43",
        is_read: true,
      },
      {
        id: 8,
        user: 2,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 15:00",
        is_read: true,
      },
    ],
  },
  {
    id: 3,
    name: "Mike",
    photo: "",
    activity: "2024-06-21 12:00",
    online: false,
    messages: [
      {
        id: 1,
        user: 3,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 2,
        user: 3,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 3,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:45",
        is_read: true,
      },
      {
        id: 4,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:47",
        is_read: true,
      },
      {
        id: 5,
        user: 3,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:52",
        is_read: true,
      },
      {
        id: 6,
        user: 3,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:42",
        is_read: true,
      },
      {
        id: 7,
        user: 3,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:43",
        is_read: true,
      },
      {
        id: 8,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 15:00",
        is_read: true,
      },
    ],
  },
  {
    id: 4,
    name: "Daniel",
    photo:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ebf9dcd7-66b4-41c2-816d-bf6f00500a0d/x178",
    activity: "2024-19-06 13:45",
    online: true,
    messages: [
      {
        id: 1,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 2,
        user: 1,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 3,
        user: 4,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:45",
        is_read: true,
      },
      {
        id: 4,
        user: 4,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:47",
        is_read: true,
      },
      {
        id: 5,
        user: 4,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:52",
        is_read: true,
      },
      {
        id: 6,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:42",
        is_read: true,
      },
      {
        id: 7,
        user: 4,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:43",
        is_read: false,
      },
      {
        id: 8,
        user: 4,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 15:00",
        is_read: false,
      },
    ],
  },
  {
    id: 5,
    name: "Matt",
    photo:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    activity: "2024-19-06 13:45",
    online: true,
    messages: [
      {
        id: 1,
        user: 5,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 2,
        user: 5,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 3,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:45",
        is_read: true,
      },
      {
        id: 4,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:47",
        is_read: true,
      },
      {
        id: 5,
        user: 5,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:52",
        is_read: true,
      },
      {
        id: 6,
        user: 5,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:42",
        is_read: true,
      },
      {
        id: 7,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:43",
        is_read: false,
      },
      {
        id: 8,
        user: 5,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 15:00",
        is_read: false,
      },
    ],
  },
  {
    id: 6,
    name: "Brandon",
    photo: "",
    activity: "2024-19-06 13:45",
    online: false,
    messages: [
      {
        id: 1,
        user: 6,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 2,
        user: 1,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 3,
        user: 6,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:45",
        is_read: true,
      },
      {
        id: 4,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:47",
        is_read: true,
      },
      {
        id: 5,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:52",
        is_read: true,
      },
      {
        id: 6,
        user: 6,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:42",
        is_read: true,
      },
      {
        id: 7,
        user: 6,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:43",
        is_read: true,
      },
      {
        id: 8,
        user: 1,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 15:00",
        is_read: false,
      },
    ],
  },
  {
    id: 7,
    name: "Kira",
    photo: "",
    activity: "2024-19-06 13:45",
    online: false,
    messages: [
      {
        id: 1,
        user: 7,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 2,
        user: 1,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 13:45",
        is_read: true,
      },
      {
        id: 3,
        user: 7,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:45",
        is_read: true,
      },
      {
        id: 4,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:47",
        is_read: true,
      },
      {
        id: 5,
        user: 1,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:52",
        is_read: true,
      },
      {
        id: 6,
        user: 7,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:42",
        is_read: true,
      },
      {
        id: 7,
        user: 7,
        message: "Lorem ipsum dolor",
        time: "2024-06-19 14:43",
        is_read: true,
      },
      {
        id: 8,
        user: 1,
        message:
          "Lorem ipsum dolor sit amet, conadipiscing elit. Nunc vulputate libet velit interdum, ac aliquet odio mattis. ",
        time: "2024-06-19 15:00",
        is_read: false,
      },
    ],
  },
];

const ChatPage = () => {
  const { user } = useParams();

  const [listOfUsers, setListOfUsers] =
    useState<IItemInListOfChats[]>(mockData);
  const [selectedUser, setSelectedUser] = useState(0);
  const [filteredName, setFilteredName] = useState("");
  const [currentConversation, setCurrentConversation] =
    useState<IItemInListOfChats | null>(null);

  useEffect(() => {
    const filterByName = mockData.filter((el) => {
      if (
        filteredName &&
        !el.name.toLocaleLowerCase().includes(filteredName.toLocaleLowerCase())
      )
        return false;
      return true;
    });
    setListOfUsers(filterByName);
    setCurrentConversation(filterByName[selectedUser]);
    // eslint-disable-next-line
  }, [filteredName]);

  useEffect(() => {
    setSelectedUser(Number(user) - 1);
    setCurrentConversation(listOfUsers[Number(user) - 1]);
    // eslint-disable-next-line
  }, [user]);

  const handleFilterByName = (word: string) => {
    setFilteredName(word);
  };

  return (
    <Container className="chatsPageContainer">
      <Box className="controlsAndChatsBox">
        <ControlsChatList
          filteredName={filteredName}
          cbHandleChangeFilter={handleFilterByName}
        />
        <Box className="listOfUsersBox">
          {listOfUsers.map((el, ind) => (
            <ChatItem
              key={el.id}
              id={el.id}
              conversation_index={ind}
              user_name={el.name}
              user_photo={el.photo}
              messages={el.messages}
              isSelected={selectedUser === ind}
            />
          ))}
        </Box>
      </Box>
      {currentConversation && (
        <ConversationItem
          user_id={currentConversation.id}
          user_name={currentConversation.name}
          user_photo={currentConversation.photo}
          time_activity={currentConversation.activity}
          online={currentConversation.online}
          messages={currentConversation.messages}
        />
      )}
    </Container>
  );
};

export default ChatPage;
