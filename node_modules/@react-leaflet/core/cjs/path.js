"use strict";

exports.__esModule = true;
exports.usePathOptions = usePathOptions;
exports.createPathHook = createPathHook;

var _react = require("react");

var _context = require("./context");

var _events = require("./events");

var _layer = require("./layer");

var _pane = require("./pane");

function usePathOptions(element, props) {
  const optionsRef = (0, _react.useRef)();
  (0, _react.useEffect)(function updatePathOptions() {
    if (props.pathOptions !== optionsRef.current) {
      var _props$pathOptions;

      const options = (_props$pathOptions = props.pathOptions) != null ? _props$pathOptions : {};
      element.instance.setStyle(options);
      optionsRef.current = options;
    }
  }, [element, props]);
}

function createPathHook(useElement) {
  return function usePath(props) {
    const context = (0, _context.useLeafletContext)();
    const elementRef = useElement((0, _pane.withPane)(props, context), context);
    (0, _events.useEventHandlers)(elementRef.current, props.eventHandlers);
    (0, _layer.useLayerLifecycle)(elementRef.current, context);
    usePathOptions(elementRef.current, props);
    return elementRef;
  };
}