import { Box, Button, TextField, InputAdornment } from "@mui/material";
import AddMemberIcon from "@components/icons/AddMemberIcon";
import SearchIcon from "@components/icons/SearchIcon";
import { translate } from "@i18n";
import "./ChatPage.scss";

interface IControlsChatListProps {
  filteredName: string;
  cbHandleChangeFilter: (word: string) => void;
}

const ControlsChatList = ({
  filteredName,
  cbHandleChangeFilter,
}: IControlsChatListProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    cbHandleChangeFilter(e.currentTarget.value);
  };

  return (
    <Box className="controlsChatListBox">
      <Box className="titleAndButtonChatsBox">
        <p>{t("chats")}</p>
        <Button type="button" className="addMemberButton">
          <AddMemberIcon fill="#007AFF" />
        </Button>
      </Box>
      <TextField
        placeholder={t("search")}
        value={filteredName}
        onChange={handleChangeFilter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon fill="#000C18" />
            </InputAdornment>
          ),
        }}
        className="searchChatsListField"
      />
    </Box>
  );
};

export default ControlsChatList;
