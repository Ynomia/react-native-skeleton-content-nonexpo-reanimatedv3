import type { ViewProps } from 'react-native';
import { ISize } from './Constants';
type OnLayout = ViewProps['onLayout'];
export declare const useLayout: () => [ISize, OnLayout];
export {};
