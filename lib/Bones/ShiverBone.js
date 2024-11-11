"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const BoneHelper_1 = __importDefault(require("../BoneHelper"));
const SkeletonContentContext_1 = require("../SkeletonContentContext");
const styles = react_native_1.StyleSheet.create({
    absoluteGradient: {
        height: '100%',
        position: 'absolute',
        width: '100%'
    },
    gradientChild: {
        flex: 1
    }
});
const { getBoneStyle, getGradientTransform, getGradientSize, getGradientEndDirection } = BoneHelper_1.default;
const ShiverBone = ({ layoutStyle, id }) => {
    const { animationValue, animationType, animationDirection, componentSize, boneColor, highlightColor } = (0, react_1.useContext)(SkeletonContentContext_1.SkeletonContentContext);
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => (Object.assign({ transform: getGradientTransform(layoutStyle, componentSize, animationValue, animationDirection) }, getGradientSize(layoutStyle, componentSize, animationDirection))));
    const gradientEndDirection = react_1.default.useMemo(() => getGradientEndDirection(layoutStyle, componentSize, animationType, animationDirection), [layoutStyle, componentSize, animationType, animationDirection]);
    return (<react_native_1.View key={layoutStyle.key || id} style={getBoneStyle(layoutStyle, componentSize, animationType, animationDirection, boneColor)}>
      <react_native_reanimated_1.default.View style={[styles.absoluteGradient, animatedStyle]}>
        <react_native_linear_gradient_1.default colors={[boneColor, highlightColor, boneColor]} start={{ x: 0, y: 0 }} end={gradientEndDirection} style={styles.gradientChild}/>
      </react_native_reanimated_1.default.View>
    </react_native_1.View>);
};
exports.default = ShiverBone;
