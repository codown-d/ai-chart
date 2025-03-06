import { CloudUploadOutlined } from "@ant-design/icons";
import { Attachments, Sender } from "@ant-design/x";
import { type GetProp } from "antd";
import { useGlobalContext } from "../hooks/GlobalContext";
import { ConstVar } from "../constant";

export const SenderHeader = () => {
  let {attachedFiles, setAttachedFiles,headerOpen, setHeaderOpen} = useGlobalContext()
  const handleFileChange: GetProp<typeof Attachments, "onChange"> = (info) =>
    setAttachedFiles(info.fileList);
  return (
    <Sender.Header
      title={ConstVar.attachments}
      open={headerOpen}
      onOpenChange={setHeaderOpen}
      styles={{
        content: {
          padding: 0,
        },
      }}
    >
      <Attachments
        beforeUpload={() => false}
        items={attachedFiles}
        onChange={handleFileChange}
        placeholder={(type) =>
          type === "drop"
            ? { title: "拖拽文件到找这里" }
            : {
                icon: <CloudUploadOutlined />,
                title: "上传文件",
                description: "点击或拖拽文件到该区域即可上传",
              }
        }
      />
    </Sender.Header>
  );
};
