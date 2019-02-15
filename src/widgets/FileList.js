const FileList = props => {
  const { options, value } = props;

  let values = [];
  if (value) {
    if (Array.isArray(value)) {
      if (value.length > 0) values = values.concat(value);
    } else values.push(value);
  }

  let getFileName = () => '';
  if (options.getFileName) {
    getFileName = options.getFileName;
  }

  let files = [];
  if (options.getFiles) {
    files = options.getFiles(values);
  }

  const onClick = options.onClick;

  return (
    <div>
      {files.map(o => (
        <div key={o.id}>
          <a
            onClick={() => {
              if (onClick) onClick(o);
            }}
          >
            {getFileName(o)}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FileList;
