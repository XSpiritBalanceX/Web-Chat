export type TMessage = {
  id: number;
  user: number;
  message: string;
  time: string;
  is_read: boolean;
};

export interface IChatItemProps {
  conversation_index: number;
  user_name: string;
  user_photo: string;
  messages: TMessage[];
  isSelected: boolean;
}

export interface IConversationItemProps {
  user_id: number;
  user_name: string;
  user_photo: string;
  time_activity: string;
  online: boolean;
  messages: TMessage[];
}

export interface IUsersChatProps {
  messages: TMessage[];
  cbHandleIsSelectedMessage: (value: boolean) => void;
  isSelectedMessage: boolean;
  cbHandleClickOnMessage: (id: number) => void;
  selectedMessages: number[];
}
