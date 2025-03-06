import { PaperClipOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useGlobalContext } from "../hooks/GlobalContext";

export const AttachmentsNode = () => {
    let {attachedFiles,headerOpen, setHeaderOpen} = useGlobalContext()
  return (
    <Badge dot={attachedFiles.length > 0 && !headerOpen}>
      <Button
        type="text"
        icon={<PaperClipOutlined />}
        onClick={() => setHeaderOpen(!headerOpen)}
      />
    </Badge>
  );
};
