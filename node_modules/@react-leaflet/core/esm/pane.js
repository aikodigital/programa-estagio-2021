export function withPane(props, context) {
  var _props$pane;

  const pane = (_props$pane = props.pane) != null ? _props$pane : context.pane;
  return pane ? { ...props,
    pane
  } : props;
}