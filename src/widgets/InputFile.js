const InputFile = props => {
  const { options, value, onChange } = props;

  return (
    <div>
      <span>{value}</span>
      <input
        type="file"
        required={props.required}
        onChange={event => {
          const files = event.target.files;
          const onFile = options.onFile;
          if (onFile) onFile(files, onChange);
        }}
      />
    </div>
  );
};

export default InputFile;
