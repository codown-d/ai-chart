import {
  Attachments,
  Bubble,
  Conversations,
  Prompts,
  Sender,
  Welcome,
  XStream,
  useXAgent,
  useXChat,
} from "@ant-design/x";
import { createStyles } from "antd-style";
import React, { useEffect } from "react";

import {
  CloudUploadOutlined,
  CommentOutlined,
  EllipsisOutlined,
  FireOutlined,
  HeartOutlined,
  PaperClipOutlined,
  PlusOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, type GetProp, Space } from "antd";
import {
  ConstVar,
  defaultConversationsItems,
  placeholderPromptsItems,
  roles,
  senderPromptsItems,
} from "./constant";
import { useStyle } from "./hooks/style";
import { LogoNode } from "./components/LogoNode";
import { AttachmentsNode } from "./components/AttachmentsNode";
import { SenderHeader } from "./components/SenderHeader";
import { postChatMessages } from "./fetch";

const Independent: React.FC = () => {
  const { styles } = useStyle();
  const [content, setContent] = React.useState("");
  const [conversationsItems, setConversationsItems] = React.useState(
    defaultConversationsItems
  );
  const [activeKey, setActiveKey] = React.useState(
    defaultConversationsItems[0].key
  );
  const [agent] = useXAgent({
    // baseURL: "http://219.151.183.115/v1/chat-messages",
    // key: "123",
    request: async ({ message }, { onSuccess })=> {
        const response = await postChatMessages({
          inputs: message,
          query: "What are the specs of the iPhone 13 Pro Max?",
          response_mode: "streaming",
          conversation_id: "",
          user: "abc-123",
          files: [
            {
              type: "image",
              transfer_method: "remote_url",
              url: "https://cloud.dify.ai/logo/logo-site.png",
            },
          ],
        });
        const sseChunks: string[] = [];
        for await (let chunk of XStream({
          readableStream: response.body,
        })) {
          console.log(chunk);
        }
          onSuccess(`Mock success return. You said: ${message}`);
    },
  });
  const { onRequest, messages, setMessages } = useXChat({
    agent,
  });

  useEffect(() => {
    if (activeKey !== undefined) {
      setMessages([]);
    }
  }, [activeKey]);

  const onSubmit = (nextContent: string) => {
    if (!nextContent) return;
    onRequest(nextContent);
    setContent("");
  };

  const onPromptsItemClick: GetProp<typeof Prompts, "onItemClick"> = (info) => {
    onRequest(info.data.description as string);
  };

  const onAddConversation = () => {
    setConversationsItems([
      ...conversationsItems,
      {
        key: `${conversationsItems.length}`,
        label: `New Conversation ${conversationsItems.length}`,
      },
    ]);
    setActiveKey(`${conversationsItems.length}`);
  };

  const onConversationClick: GetProp<typeof Conversations, "onActiveChange"> = (
    key
  ) => {
    setActiveKey(key);
  };

  const placeholderNode = (
    <Space direction="vertical" size={16} className={styles.placeholder}>
      <Welcome
        variant="borderless"
        icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
        title={`Hello, I'm ${ConstVar.name}!`}
        description={'基于DeepSeek，AGI产品界面解决方案，创造更好的问答体验~'}
        extra={
          <Space>
            <Button icon={<ShareAltOutlined />} />
            <Button icon={<EllipsisOutlined />} />
          </Space>
        }
      />
      <Prompts
        title={'你想要？'}
        items={placeholderPromptsItems}
        styles={{
          list: {
            width: "100%",
          },
          item: {
            flex: 1,
          },
        }}
        onItemClick={onPromptsItemClick}
      />
    </Space>
  );

  const items: GetProp<typeof Bubble.List, "items"> = messages.map(
    ({ id, message, status }) => ({
      key: id,
      avatar:{ icon: <UserOutlined />, style: { background: '#964B00' } },
      loading: status === "loading",
      role: status === "local" ? "local" : "ai",
      content: message,
    })
  );

  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <LogoNode />
        <Button
          onClick={onAddConversation}
          type="link"
          className={styles.addBtn}
          icon={<PlusOutlined />}
        >
          {ConstVar.newConversation}
        </Button>
        <Conversations
          items={conversationsItems}
          className={styles.conversations}
          activeKey={activeKey}
          onActiveChange={onConversationClick}
        />
      </div>
      <div className={styles.chat}>
        <Bubble.List
          items={
            items.length > 0
              ? items
              : [{ content: placeholderNode, variant: "borderless" }]
          }
          roles={roles}
          className={styles.messages}
        />
        <Prompts items={senderPromptsItems} onItemClick={onPromptsItemClick} />
        <Sender
          value={content}
          header={<SenderHeader />}
          onSubmit={onSubmit}
          onChange={setContent}
          prefix={<AttachmentsNode />}
          loading={agent.isRequesting()}
          className={styles.sender}
        />
      </div>
    </div>
  );
};

export default Independent;
