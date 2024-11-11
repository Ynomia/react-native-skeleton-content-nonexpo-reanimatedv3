"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayout = void 0;
const react_1 = require("react");
const useLayout = () => {
    const [size, setSize] = (0, react_1.useState)({ width: 0, height: 0 });
    const onLayout = (0, react_1.useCallback)(event => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
    }, []);
    return [size, onLayout];
};
exports.useLayout = useLayout;
