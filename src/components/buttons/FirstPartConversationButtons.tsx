import { Button } from "@mui/material";
import { translate } from "@i18n";
import EditIcon from "@components/icons/EditIcon";
import BellIcon from "@components/icons/BellIcon";
import BucketIcon from "@components/icons/BucketIcon";

interface IFirstPartConversationButtonsProps {
  user_id: number;
  cbHandleNavigationInModal: (name: string) => void;
}

const FirstPartConversationButtons = ({
  user_id,
  cbHandleNavigationInModal,
}: IFirstPartConversationButtonsProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const handleEditConversation = () => {
    console.log("edit conversation", user_id);
  };

  const handleNavigationInModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    cbHandleNavigationInModal(name);
  };

  const handleDeleteConversation = () => {
    console.log("delete conversation", user_id);
  };

  return (
    <>
      <Button type="button" onClick={handleEditConversation}>
        <EditIcon fill="#000000" />
        {t("edit")}
      </Button>
      <Button type="button" name="button_1" onClick={handleNavigationInModal}>
        <BellIcon fill="#000000" />
        {t("turnOffNotif")}
      </Button>
      <Button
        type="button"
        className="redConversationButton"
        onClick={handleDeleteConversation}
      >
        <BucketIcon fill="#C92727" />
        {t("deleteChat")}
      </Button>
    </>
  );
};

export default FirstPartConversationButtons;
