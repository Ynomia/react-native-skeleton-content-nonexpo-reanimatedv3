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
const react_native_reanimated_1 = require("react-native-reanimated");
const Bones_1 = __importDefault(require("./Bones/Bones"));
const Constants_1 = require("./Constants");
const SkeletonContentContextProvider_1 = __importDefault(require("./SkeletonContentContextProvider"));
const useLayout_1 = require("./useLayout"); // eslint-disable-line
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});
const SkeletonContent = ({ containerStyle = styles.container, easing = Constants_1.DEFAULT_EASING, duration = Constants_1.DEFAULT_DURATION, layout = [], animationType = Constants_1.DEFAULT_ANIMATION_TYPE, animationDirection = Constants_1.DEFAULT_ANIMATION_DIRECTION, isLoading = Constants_1.DEFAULT_LOADING, boneColor = Constants_1.DEFAULT_BONE_COLOR, highlightColor = Constants_1.DEFAULT_HIGHLIGHT_COLOR, children }) => {
    const shiverValue = animationType === 'shiver' ? 1 : 0;
    const [componentSize, onLayout] = (0, useLayout_1.useLayout)();
    const animationValue = (0, react_native_reanimated_1.useSharedValue)(0);
    (0, react_1.useEffect)(() => {
        if (isLoading) {
            if (shiverValue === 1) {
                animationValue.value = (0, react_native_reanimated_1.withRepeat)((0, react_native_reanimated_1.withTiming)(1, { duration, easing }), -1);
            }
            else {
                animationValue.value = (0, react_native_reanimated_1.withRepeat)((0, react_native_reanimated_1.withTiming)(1, { duration: duration / 2, easing }), -1, true);
            }
        }
        else {
            animationValue.value = 0;
        }
    }, [isLoading, shiverValue]);
    const contextProps = {
        animationValue,
        animationType,
        animationDirection,
        componentSize,
        boneColor,
        highlightColor
    };
    return (<react_native_1.View style={containerStyle} onLayout={onLayout}>
      {isLoading ? (<SkeletonContentContextProvider_1.default value={contextProps}>
          <Bones_1.default bonesLayout={layout} childrenItems={children}/>
        </SkeletonContentContextProvider_1.default>) : (children)}
    </react_native_1.View>);
};
exports.default = react_1.default.memo(SkeletonContent);
