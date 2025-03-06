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
export const ConstVar={
  name:'Ai 智能体',
  newConversation:'创建新的对话',
  hotTopics:'热门话题',
  designGuide:'使用指南',
  attachments:'附件',

}
export const placeholderPromptsItems: GetProp<typeof Prompts, "items"> = [
  {
    key: "1",
    label: (
      <RenderTitle
        icon={<FireOutlined style={{ color: "#FF4D4F" }} />}
        title={ConstVar.hotTopics}
      />
    ),
    description: "你对什么感兴趣?",
    children: [
      {
        key: "1-1",
        description: `兴趣1?`,
      },
      {
        key: "1-2",
        description: `兴趣1?`,
      },
      {
        key: "1-3",
        description: `兴趣1?`,
      },
    ],
  },
  {
    key: "2",
    label: (
      <RenderTitle
        icon={<ReadOutlined style={{ color: "#1890FF" }} />}
        title={ConstVar.designGuide}
      />
    ),
    description: "如何快速找到适合自己的产品？",
    children: [
      {
        key: "2-1",
        icon: <HeartOutlined />,
        description: `产品1`,
      },
      {
        key: "2-2",
        icon: <SmileOutlined />,
        description: `产品1`,
      },
      {
        key: "2-3",
        icon: <CommentOutlined />,
        description: `产品1`,
      },
    ],
  },
];

export const senderPromptsItems: GetProp<typeof Prompts, "items"> = [
  {
    key: "1",
    description: ConstVar.hotTopics,
    icon: <FireOutlined style={{ color: "#FF4D4F" }} />,
  },
  {
    key: "2",
    description: ConstVar.designGuide,
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
    label: `What is ${ConstVar.name}?`,
  },
];
