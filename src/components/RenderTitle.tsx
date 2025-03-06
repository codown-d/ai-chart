import { Space } from "antd";

export const RenderTitle = (props: {
  icon: React.ReactElement;
  title: string;
}) => {
  let { icon, title } = props;
  return (
    <Space align="start">
      {icon}
      <span>{title}</span>
    </Space>
  );
};
