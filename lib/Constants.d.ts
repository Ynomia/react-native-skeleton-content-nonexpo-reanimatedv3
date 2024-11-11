import { StyleProp, ViewStyle } from 'react-native';
import { EasingFunction, EasingFunctionFactory } from 'react-native-reanimated';
export type AnimationType = 'none' | 'shiver' | 'pulse' | undefined;
export type AnimationDirection = 'horizontalLeft' | 'horizontalRight' | 'verticalTop' | 'verticalDown' | 'diagonalDownLeft' | 'diagonalDownRight' | 'diagonalTopLeft' | 'diagonalTopRight' | undefined;
export interface ICustomViewStyle extends ViewStyle {
    children?: ICustomViewStyle[];
    key?: number | string;
    container?: React.ComponentType;
    containerProps?: any;
}
export interface ISkeletonContentProps {
    isLoading: boolean;
    layout?: ICustomViewStyle[];
    duration?: number;
    containerStyle?: StyleProp<ViewStyle>;
    animationType?: AnimationType;
    animationDirection?: AnimationDirection;
    boneColor?: string;
    highlightColor?: string;
    easing?: EasingFunction;
    children?: any;
}
export interface IDirection {
    x: number;
    y: number;
}
export interface ISize {
    width: number;
    height: number;
}
export declare const DEFAULT_BORDER_RADIUS = 4;
export declare const DEFAULT_DURATION = 1200;
export declare const DEFAULT_ANIMATION_TYPE: AnimationType;
export declare const DEFAULT_ANIMATION_DIRECTION: AnimationDirection;
export declare const DEFAULT_BONE_COLOR = "#E1E9EE";
export declare const DEFAULT_HIGHLIGHT_COLOR = "#F2F8FC";
export declare const DEFAULT_EASING: EasingFunctionFactory;
export declare const DEFAULT_LOADING = true;
