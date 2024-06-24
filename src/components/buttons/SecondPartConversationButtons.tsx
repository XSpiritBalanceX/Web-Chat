import { Button } from "@mui/material";
import { translate } from "@i18n";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BellSleepyIcon from "@components/icons/BellSleepyIcon";
import SoundOffIcon from "@components/icons/SoundOffIcon";
import BanICon from "@components/icons/BanICon";
import BellDisabledIcon from "@components/icons/BellDisabledIcon";

interface ISecondPartConversationButtonsProps {
  user_id: number;
  cbHandleNavigationInModal: (name: string) => void;
}

const SecondPartConversationButtons = ({
  user_id,
  cbHandleNavigationInModal,
}: ISecondPartConversationButtonsProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });
  const handleNavigationInModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    cbHandleNavigationInModal(name);
  };

  const handleTurnOffSound = () => {
    console.log("turn off sound", user_id);
  };

  const handleDisableNotification = () => {
    console.log("turn off notification", user_id);
  };

  const handleBlockUser = () => {
    console.log("block user", user_id);
  };

  return (
    <>
      <Button
        type="button"
        name="button_back_1"
        onClick={handleNavigationInModal}
        className="backButton"
      >
        <ArrowBackIosNewIcon fill="#000000" />
        {t("back")}
      </Button>
      <Button type="button" name="button_2" onClick={handleNavigationInModal}>
        <BellSleepyIcon fill="#000000" />
        {t("disabledTemp")}
      </Button>
      <Button type="button" onClick={handleTurnOffSound}>
        <SoundOffIcon fill="#000000" />
        {t("turnOffSound")}
      </Button>
      <Button
        type="button"
        className="redConversationButton"
        onClick={handleDisableNotification}
      >
        <BellDisabledIcon fill="#C92727" />
        {t("offNotifications")}
      </Button>
      <Button
        type="button"
        className="redConversationButton"
        onClick={handleBlockUser}
      >
        <BanICon fill="#C92727" />
        {t("block")}
      </Button>
    </>
  );
};

export default SecondPartConversationButtons;
