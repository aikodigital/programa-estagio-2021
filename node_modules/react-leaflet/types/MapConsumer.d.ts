import { Map } from 'leaflet';
import { ReactElement } from 'react';
export interface MapConsumerProps {
    children: (map: Map) => ReactElement | null;
}
export declare function MapConsumer({ children }: MapConsumerProps): ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null;
