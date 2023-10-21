import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import Image from "next/image";
import { Message } from "../../typing";
import useSWR from "swr";
// import Loading from "@/components/loading";

async function getData() {
  const origin = new URL(process.env.VERCEL_URL as string).origin;

  const response = await fetch(new Request(`${origin}/api/getMessages`));
  return await response.json();
}

export default async function Home() {
  const data = await getData();
  const messages: Message[] = data.messages;


  
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
