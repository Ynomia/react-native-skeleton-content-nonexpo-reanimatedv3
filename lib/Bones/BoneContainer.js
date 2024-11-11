"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const BoneContainer = ({ layoutStyle, childrenBones, id, container, containerProps }) => {
    const Wrapper = container || react_native_1.View;
    return (<Wrapper key={layoutStyle.key || id} style={layoutStyle} {...containerProps}>
      {childrenBones}
    </Wrapper>);
};
exports.default = BoneContainer;
