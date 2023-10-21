"use client";
import { fetcher } from "@/utils/fetchMessages";
import React, { useEffect } from "react";
import useSWR from "swr";
import MessageComponent from "./MessageComponent";
import { clientPusher } from "../../pusher";
import { Message } from "../../typing";
type Props = {
  initialMessages: Message[];
};
const MessageList = ({initialMessages}:Props) => {
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("new-message", (message: Message) => {
      if (messages?.find((m) => m.id === message.id)) return;
      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [message, ...messages!],
          rollbackOnError: true,
        });
      }
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [mutate, messages, clientPusher]);
  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl">
      {(messages||initialMessages).map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
