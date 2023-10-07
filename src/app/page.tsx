import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* messge list*/}
      <MessageList />

      {/* chat input */}
      <ChatInput />
    </main>
  );
}
