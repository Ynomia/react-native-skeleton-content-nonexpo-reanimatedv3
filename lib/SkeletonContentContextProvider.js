"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SkeletonContentContext_1 = require("./SkeletonContentContext");
const SkeletonContentContextProvider = ({ value, children }) => (<SkeletonContentContext_1.SkeletonContentContext.Provider value={value}>
    {children}
  </SkeletonContentContext_1.SkeletonContentContext.Provider>);
exports.default = SkeletonContentContextProvider;
