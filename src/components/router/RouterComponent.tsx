import { Route, Routes, Navigate } from "react-router-dom";
import ChatPage from "@pages/chat/ChatPage";

const RouterComponent = () => {
  const routes = [{ path: "/chats", element: <ChatPage /> }];
  return (
    <Routes>
      {routes.map((el, ind) => (
        <Route key={ind} path={el.path} element={el.element} />
      ))}
      <Route path="*" element={<Navigate to={"/chats"} />} />
    </Routes>
  );
};

export default RouterComponent;
