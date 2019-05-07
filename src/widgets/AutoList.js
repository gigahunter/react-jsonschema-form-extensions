import ReactTags from 'react-tag-autocomplete2';

const myTag = props => (
  <button
    type="button"
    className={props.classNames.selectedTag}
    title="刪除"
    onClick={props.onDelete}
  >
    <span className={props.classNames.selectedTagName}>{props.tag.name}</span>
  </button>
);

const AutoList = props => {
  const { options, value, onChange, formContext, disabled } = props;

  let values = [];
  if (value) {
    if (Array.isArray(value)) {
      if (value.length > 0) values = values.concat(value);
    } else values.push(value);
  }

  let suggestions = [];
  if (options.getSuggestions) {
    suggestions = options.getSuggestions();
  }

  let tags = [];
  if (options.getValues) {
    tags = options.getValues(values);
  }

  if (disabled) {
    const ary = tags.map(t => t.name);
    return <span>{ary.join(',')}</span>;
  }

  const tagProps = {
    tagComponent: myTag,
    tags,
    suggestions,
    handleDelete: i => {
      const onRemove = options.onRemove;
      if (onRemove) onRemove(values, i, onChange);
    },
    handleAddition: tag => {
      const onAdd = options.onAdd;
      if (onAdd) onAdd(values, tag, onChange, formContext);
    }
  };

  if (props.autofocus) {
    tagProps.autofocus = true;
  }

  if (options.placeholder) tagProps.placeholder = options.placeholder;

  return <ReactTags placeholder="" {...tagProps} />;
};

export default AutoList;
