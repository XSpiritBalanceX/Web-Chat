import { useState } from "react";
import { Box } from "@mui/material";
import FirstPartConversationButtons from "@components/buttons/FirstPartConversationButtons";
import SecondPartConversationButtons from "@components/buttons/SecondPartConversationButtons";
import ThirdPartConversationButtons from "@components/buttons/ThirdPartConversationButtons";
import "./Modals.scss";

interface IConversationModalProps {
  user_id: number;
}

const ConversationModal = ({ user_id }: IConversationModalProps) => {
  const [stepOfButtons, setStepOfButtons] = useState(1);

  const handleNavigationInModal = (name: string) => {
    name === "button_1" && setStepOfButtons(2);
    name === "button_back_1" && setStepOfButtons(1);
    name === "button_2" && setStepOfButtons(3);
    name === "button_back_2" && setStepOfButtons(2);
  };

  return (
    <Box className="conversationModalBox">
      {stepOfButtons === 1 && (
        <>
          <FirstPartConversationButtons
            user_id={user_id}
            cbHandleNavigationInModal={handleNavigationInModal}
          />
        </>
      )}
      {stepOfButtons === 2 && (
        <>
          <SecondPartConversationButtons
            user_id={user_id}
            cbHandleNavigationInModal={handleNavigationInModal}
          />
        </>
      )}
      {stepOfButtons === 3 && (
        <>
          <ThirdPartConversationButtons
            user_id={user_id}
            cbHandleNavigationInModal={handleNavigationInModal}
          />
        </>
      )}
    </Box>
  );
};

export default ConversationModal;
