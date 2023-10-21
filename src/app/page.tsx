import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import Image from "next/image";
import { Message } from "../../typing";
import useSWR from "swr";
// import Loading from "@/components/loading";

async function getMessages() {
  const response = await fetch(`${process.env.VERCEL_URL}/api/getMessages`);
  return await response.json();
}

export default async function Home() {
  const { data, error } = useSWR("messages", getMessages);

  if (error) {
    return <div>Error loading messages</div>;
  }

  const messages: Message[] = data || [];
  // if (!messages) return <Loading />;
  return (
    <main>
      {/* messge list*/}
      <MessageList initialMessages={messages} />

      {/* chat input */}
      <ChatInput />
    </main>
  );
}
