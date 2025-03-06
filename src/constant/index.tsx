import { type GetProp } from "antd";
import { Bubble, Prompts } from "@ant-design/x";
import { RenderTitle } from "../components/RenderTitle";
import {
  CommentOutlined,
  FireOutlined,
  HeartOutlined,
  ReadOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export const placeholderPromptsItems: GetProp<typeof Prompts, "items"> = [
  {
    key: "1",
    label: (
      <RenderTitle
        icon={<FireOutlined style={{ color: "#FF4D4F" }} />}
        title={"Hot Topics"}
      />
    ),
    description: "What are you interested in?",
    children: [
      {
        key: "1-1",
        description: `What's new in X?`,
      },
      {
        key: "1-2",
        description: `What's AGI?`,
      },
      {
        key: "1-3",
        description: `Where is the doc?`,
      },
    ],
  },
  {
    key: "2",
    label: (
      <RenderTitle
        icon={<ReadOutlined style={{ color: "#1890FF" }} />}
        title={"Design Guide"}
      />
    ),
    description: "How to design a good product?",
    children: [
      {
        key: "2-1",
        icon: <HeartOutlined />,
        description: `Know the well`,
      },
      {
        key: "2-2",
        icon: <SmileOutlined />,
        description: `Set the AI role`,
      },
      {
        key: "2-3",
        icon: <CommentOutlined />,
        description: `Express the feeling`,
      },
    ],
  },
];

export const senderPromptsItems: GetProp<typeof Prompts, "items"> = [
  {
    key: "1",
    description: "Hot Topics",
    icon: <FireOutlined style={{ color: "#FF4D4F" }} />,
  },
  {
    key: "2",
    description: "Design Guide",
    icon: <ReadOutlined style={{ color: "#1890FF" }} />,
  },
];

export const roles: GetProp<typeof Bubble.List, "roles"> = {
  ai: {
    placement: "start",
    typing: { step: 5, interval: 20 },
    styles: {
      content: {
        borderRadius: 16,
      },
    },
  },
  local: {
    placement: "end",
    variant: "shadow",
  },
};
export const defaultConversationsItems = [
  {
    key: '0',
    label: 'What is Ant Design X?',
  },
];