import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import Image from "next/image";
import { Message } from "../../typing";
import useSWR from "swr";
import { getData } from "@/utils/fetchData";
// import Loading from "@/components/loading";



export default async function Home() {
  const data = await getData();
  console.log(data);
  const messages: Message[] = data.messages;

  // if (!messages) return <Loading />;
  return (
    <main>
      {/* messge list*/}
      <MessageList initialMessages={messages|| []} />

      {/* chat input */}
      <ChatInput />
    </main>
  );
}
