import { Button } from "@mui/material";
import { translate } from "@i18n";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface IThirdPartConversationButtonsProps {
  user_id: number;
  cbHandleNavigationInModal: (name: string) => void;
}

const ThirdPartConversationButtons = ({
  user_id,
  cbHandleNavigationInModal,
}: IThirdPartConversationButtonsProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const handleNavigationInModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    cbHandleNavigationInModal(name);
  };

  const handleOffNotification = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    console.log("off notifications: ", name);
  };

  const buttonsNames = [
    { label: "dontDist1Hour", name: "1_hour" },
    { label: "dontDist24Hours", name: "24_hours" },
    { label: "dontDist7Days", name: "7_days" },
    { label: "dontDist1Month", name: "1_month" },
  ];

  return (
    <>
      <Button
        type="button"
        name="button_back_2"
        onClick={handleNavigationInModal}
        className="backButton"
      >
        <ArrowBackIosNewIcon fill="#000000" />
        {t("back")}
      </Button>
      {buttonsNames.map((el, ind) => (
        <Button
          key={ind}
          type="button"
          name={el.name}
          onClick={handleOffNotification}
        >
          {t(el.label)}
        </Button>
      ))}
    </>
  );
};

export default ThirdPartConversationButtons;
