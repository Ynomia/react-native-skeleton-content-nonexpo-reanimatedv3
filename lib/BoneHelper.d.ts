import { SharedValue } from 'react-native-reanimated';
import { ICustomViewStyle, ISize, AnimationType, AnimationDirection, IDirection } from './Constants';
declare const BoneHelper: {
    getBoneWidth: (boneLayout: ICustomViewStyle, componentSize: {
        width: number;
        height: number;
    }) => number;
    getBoneHeight: (boneLayout: ICustomViewStyle, componentSize: {
        width: number;
        height: number;
    }) => number;
    getBoneStyle: (boneLayout: ICustomViewStyle, componentSize: ISize, animationType: AnimationType, animationDirection: AnimationDirection, boneColor: string) => ICustomViewStyle;
    getGradientSize: (boneLayout: ICustomViewStyle, componentSize: ISize, animationDirection: AnimationDirection) => ICustomViewStyle;
    getGradientTransform: (boneLayout: ICustomViewStyle, componentSize: ISize, animationValue: SharedValue<number>, animationDirection: AnimationDirection) => any[];
    getGradientEndDirection: (boneLayout: ICustomViewStyle, componentSize: ISize, animationType: AnimationType, animationDirection: AnimationDirection) => IDirection;
};
export default BoneHelper;
