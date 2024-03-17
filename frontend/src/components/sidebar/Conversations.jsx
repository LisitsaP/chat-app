import useGetConversations from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();

  console.log("CONVERSATIONS:", conversations);
  return (
    <div className="py'2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversations._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
}
