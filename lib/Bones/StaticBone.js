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
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const BoneHelper_1 = __importDefault(require("../BoneHelper"));
const SkeletonContentContext_1 = require("../SkeletonContentContext");
const useStaticBoneStyle = (props) => {
    const animatedPulseStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => ({
        backgroundColor: (0, react_native_reanimated_1.interpolateColor)(props.animationValue.value, [0, 1], [props.boneColor, props.highlightColor])
    }));
    return [
        BoneHelper_1.default.getBoneStyle(props.layoutStyle, props.componentSize, props.animationType, props.animationDirection, props.boneColor),
        ...(props.animationType === 'none' ? [] : [animatedPulseStyle])
    ];
};
const StaticBone = ({ layoutStyle, id }) => {
    const contextProps = (0, react_1.useContext)(SkeletonContentContext_1.SkeletonContentContext);
    const style = useStaticBoneStyle(Object.assign({ layoutStyle }, contextProps));
    return <react_native_reanimated_1.default.View key={layoutStyle.key || id} style={style}/>;
};
exports.default = StaticBone;
