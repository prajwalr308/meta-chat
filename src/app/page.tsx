import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import Image from "next/image";
import { Message } from "../../typing";
// import Loading from "@/components/loading";

async function getData() {
  const res= await fetch(
    `${process.env.VERCEL_URL}/api/getMessages`
  ).then((res) => res.json());
  return res;
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
