import React from 'react';

const MultiFileR = props => {
  const { options, value } = props;
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

  let download = (uid, name) => {};
  if (options.download) {
    download = options.download;
  }

  return (
    <React.Fragment>
      {fileList.map(f => (
        <div key={f.uid}>
          <a onClick={() => download(f.uid, f.name)}>{`${f.name}`}</a>
        </div>
      ))}
    </React.Fragment>
  );
};

export default MultiFileR;
