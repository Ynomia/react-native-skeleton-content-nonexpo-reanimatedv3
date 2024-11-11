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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const BoneContainer_1 = __importDefault(require("./BoneContainer"));
const ShiverBone_1 = __importDefault(require("./ShiverBone"));
const StaticBone_1 = __importDefault(require("./StaticBone"));
const SkeletonContentContext_1 = require("../SkeletonContentContext");
const Bones = ({ bonesLayout, childrenItems }) => {
    const { animationType, prefix } = (0, react_1.useContext)(SkeletonContentContext_1.SkeletonContentContext);
    if (bonesLayout === null || bonesLayout === void 0 ? void 0 : bonesLayout.length) {
        return Array(bonesLayout.length)
            .fill(undefined)
            .map((_, i) => {
            var _a;
            // has a nested layout
            if ((_a = bonesLayout[i].children) === null || _a === void 0 ? void 0 : _a.length) {
                const containerPrefix = bonesLayout[i].key || `bone_container_${i}`;
                const _b = bonesLayout[i], { children: childBones, container, containerProps } = _b, layoutStyle = __rest(_b, ["children", "container", "containerProps"]);
                return (<BoneContainer_1.default key={containerPrefix} layoutStyle={layoutStyle} childrenBones={Bones({
                        bonesLayout: childBones === null || childBones === void 0 ? void 0 : childBones.map((it, index) => (Object.assign(Object.assign({}, it), { key: `nested_${index}` }))),
                        childrenItems: []
                    })} id={containerPrefix} container={container} containerProps={containerProps}/>);
            }
            if (animationType === 'pulse' || animationType === 'none') {
                return (<StaticBone_1.default key={prefix ? `${prefix}_${i}` : i} layoutStyle={bonesLayout[i]} id={prefix ? `${prefix}_${i}` : i}/>);
            }
            return (<ShiverBone_1.default key={prefix ? `${prefix}_${i}` : i} layoutStyle={bonesLayout[i]} id={prefix ? `${prefix}_${i}` : i}/>);
        });
        // no layout, matching children's layout
    }
    return react_1.default.Children.map(childrenItems, (child, i) => {
        const styling = child.props.style || {};
        if (animationType === 'pulse' || animationType === 'none') {
            return <StaticBone_1.default layoutStyle={styling} id={i}/>;
        }
        return <ShiverBone_1.default layoutStyle={styling} id={i}/>;
    });
};
exports.default = Bones;
