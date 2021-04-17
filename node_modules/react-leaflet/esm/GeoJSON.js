import { createPathComponent } from '@react-leaflet/core';
import { GeoJSON as LeafletGeoJSON } from 'leaflet';
export const GeoJSON = createPathComponent(function createGeoJSON({
  data,
  ...options
}, ctx) {
  const instance = new LeafletGeoJSON(data, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
});