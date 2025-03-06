import { CloudUploadOutlined } from "@ant-design/icons";
import { Attachments, Sender } from "@ant-design/x";
import { type GetProp } from "antd";
import { useGlobalContext } from "../hooks/GlobalContext";

export const SenderHeader = () => {
  let {attachedFiles, setAttachedFiles,headerOpen, setHeaderOpen} = useGlobalContext()
  const handleFileChange: GetProp<typeof Attachments, "onChange"> = (info) =>
    setAttachedFiles(info.fileList);
  return (
    <Sender.Header
      title="Attachments"
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
            ? { title: "Drop file here" }
            : {
                icon: <CloudUploadOutlined />,
                title: "Upload files",
                description: "Click or drag files to this area to upload",
              }
        }
      />
    </Sender.Header>
  );
};
