const MyRender = (props) => {
  const { options, value, formContext } = props;

  let render;
  if (options && options.render) render = options.render;

  if (render) return render(value, formContext, props);

  return <div>no render!</div>;
};

export default MyRender;
