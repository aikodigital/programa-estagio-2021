"use strict";

exports.__esModule = true;
exports.useLayerLifecycle = useLayerLifecycle;
exports.createLayerHook = createLayerHook;

var _react = require("react");

var _attribution = require("./attribution");

var _context = require("./context");

var _events = require("./events");

var _pane = require("./pane");

function useLayerLifecycle(element, context) {
  (0, _react.useEffect)(function addLayer() {
    var _context$layerContain;

    const container = (_context$layerContain = context.layerContainer) != null ? _context$layerContain : context.map;
    container.addLayer(element.instance);
    return function removeLayer() {
      container.removeLayer(element.instance);
    };
  }, [context, element]);
}

function createLayerHook(useElement) {
  return function useLayer(props) {
    const context = (0, _context.useLeafletContext)();
    const elementRef = useElement((0, _pane.withPane)(props, context), context);
    (0, _attribution.useAttribution)(context.map, props.attribution);
    (0, _events.useEventHandlers)(elementRef.current, props.eventHandlers);
    useLayerLifecycle(elementRef.current, context);
    return elementRef;
  };
}