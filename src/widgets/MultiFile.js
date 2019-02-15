import { Upload, Button, Modal } from 'antd';

const { confirm } = Modal;

const MultiFile = props => {
  const { options, value, onChange } = props;
  let fileList = [];
  let values = [];
  if (value) {
    if (Array.isArray(value)) {
      if (value.length > 0) values = values.concat(value);
    } else values.push(value);
  }

  //return array of {uid, name}
  if (options.getFileList) {
    fileList = options.getFileList(values);
  }

  const upProps = {
    onRemove: file => {
      confirm({
        title: '確定刪除?',
        onOk() {
          const onRemove = options.onRemove;
          if (onRemove) return onRemove(file, values, onChange);
        },
      });

      return false;
    },
    beforeUpload: file => {
      const onUpload = options.onUpload;
      if (onUpload) return onUpload(file, values, onChange);
      return false;
    },
    fileList,
  };

  return (
    <Upload {...upProps}>
      <Button icon="upload">上傳</Button>
    </Upload>
  );
};

export default MultiFile;
