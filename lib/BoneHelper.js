"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_reanimated_1 = require("react-native-reanimated");
const Constants_1 = require("./Constants");
const getBoneWidth = (boneLayout, componentSize) => {
    'worklet';
    return ((typeof boneLayout.width === 'string'
        ? componentSize.width
        : boneLayout.width) || 0);
};
const getBoneHeight = (boneLayout, componentSize) => {
    'worklet';
    return ((typeof boneLayout.height === 'string'
        ? componentSize.height
        : boneLayout.height) || 0);
};
const getBoneStyle = (boneLayout, componentSize, animationType, animationDirection, boneColor) => {
    const { backgroundColor, borderRadius } = boneLayout;
    const boneWidth = getBoneWidth(boneLayout, componentSize);
    const boneHeight = getBoneHeight(boneLayout, componentSize);
    const boneStyle = Object.assign({ width: boneWidth, height: boneHeight, borderRadius: borderRadius || Constants_1.DEFAULT_BORDER_RADIUS }, boneLayout);
    if (animationType !== 'pulse') {
        boneStyle.overflow = 'hidden';
        boneStyle.backgroundColor = backgroundColor || boneColor;
    }
    if (animationDirection === 'diagonalDownRight' ||
        animationDirection === 'diagonalDownLeft' ||
        animationDirection === 'diagonalTopRight' ||
        animationDirection === 'diagonalTopLeft') {
        boneStyle.justifyContent = 'center';
        boneStyle.alignItems = 'center';
    }
    return boneStyle;
};
const getGradientSize = (boneLayout, componentSize, animationDirection) => {
    'worklet';
    const boneWidth = getBoneWidth(boneLayout, componentSize);
    const boneHeight = getBoneHeight(boneLayout, componentSize);
    const gradientStyle = {};
    if (animationDirection === 'diagonalDownRight' ||
        animationDirection === 'diagonalDownLeft' ||
        animationDirection === 'diagonalTopRight' ||
        animationDirection === 'diagonalTopLeft') {
        gradientStyle.width = boneWidth;
        gradientStyle.height = boneHeight;
        if (boneHeight >= boneWidth) {
            gradientStyle.height *= 1.5;
        }
        else {
            gradientStyle.width *= 1.5;
        }
    }
    return gradientStyle;
};
const getPositionRange = (boneLayout, componentSize, animationDirection) => {
    'worklet';
    // use layout dimensions for percentages (string type)
    const boneWidth = getBoneWidth(boneLayout, componentSize);
    const boneHeight = getBoneHeight(boneLayout, componentSize);
    if (animationDirection === 'horizontalRight') {
        return [-boneWidth, +boneWidth];
    }
    if (animationDirection === 'horizontalLeft') {
        return [+boneWidth, -boneWidth];
    }
    if (animationDirection === 'verticalDown') {
        return [-boneHeight, +boneHeight];
    }
    if (animationDirection === 'verticalTop') {
        return [+boneHeight, -boneHeight];
    }
    return [];
};
const getGradientTransform = (boneLayout, componentSize, animationValue, animationDirection) => {
    'worklet';
    let transform = [];
    const boneWidth = getBoneWidth(boneLayout, componentSize);
    const boneHeight = getBoneHeight(boneLayout, componentSize);
    if (animationDirection === 'verticalTop' ||
        animationDirection === 'verticalDown' ||
        animationDirection === 'horizontalLeft' ||
        animationDirection === 'horizontalRight') {
        const interpolatedPosition = (0, react_native_reanimated_1.interpolate)(animationValue.value, [0, 1], getPositionRange(boneLayout, componentSize, animationDirection));
        if (animationDirection === 'verticalTop' ||
            animationDirection === 'verticalDown') {
            transform = [{ translateY: interpolatedPosition }];
        }
        else {
            transform = [{ translateX: interpolatedPosition }];
        }
    }
    else if (animationDirection === 'diagonalDownRight' ||
        animationDirection === 'diagonalTopRight' ||
        animationDirection === 'diagonalDownLeft' ||
        animationDirection === 'diagonalTopLeft') {
        const diagonal = Math.sqrt(boneHeight * boneHeight + boneWidth * boneWidth);
        const mainDimension = Math.max(boneHeight, boneWidth);
        const oppositeDimension = mainDimension === boneWidth ? boneHeight : boneWidth;
        const diagonalAngle = Math.acos(mainDimension / diagonal);
        let rotateAngle = animationDirection === 'diagonalDownRight' ||
            animationDirection === 'diagonalTopLeft'
            ? Math.PI / 2 - diagonalAngle
            : Math.PI / 2 + diagonalAngle;
        const additionalRotate = animationDirection === 'diagonalDownRight' ||
            animationDirection === 'diagonalTopLeft'
            ? 2 * diagonalAngle
            : -2 * diagonalAngle;
        const distanceFactor = (diagonal + oppositeDimension) / 2;
        if (mainDimension === boneWidth && boneWidth !== boneHeight) {
            rotateAngle += additionalRotate;
        }
        const sinComponent = Math.sin(diagonalAngle) * distanceFactor;
        const cosComponent = Math.cos(diagonalAngle) * distanceFactor;
        let xOutputRange = [0, 0];
        let yOutputRange = [0, 0];
        if (animationDirection === 'diagonalDownRight' ||
            animationDirection === 'diagonalTopLeft') {
            xOutputRange =
                animationDirection === 'diagonalDownRight'
                    ? [-sinComponent, sinComponent]
                    : [sinComponent, -sinComponent];
            yOutputRange =
                animationDirection === 'diagonalDownRight'
                    ? [-cosComponent, cosComponent]
                    : [cosComponent, -cosComponent];
        }
        else {
            xOutputRange =
                animationDirection === 'diagonalDownLeft'
                    ? [-sinComponent, sinComponent]
                    : [sinComponent, -sinComponent];
            yOutputRange =
                animationDirection === 'diagonalDownLeft'
                    ? [cosComponent, -cosComponent]
                    : [-cosComponent, cosComponent];
            if (mainDimension === boneHeight && boneWidth !== boneHeight) {
                xOutputRange.reverse();
                yOutputRange.reverse();
            }
        }
        let translateX = (0, react_native_reanimated_1.interpolate)(animationValue.value, [0, 1], xOutputRange);
        let translateY = (0, react_native_reanimated_1.interpolate)(animationValue.value, [0, 1], yOutputRange);
        // swapping the translates if width is the main dim
        if (mainDimension === boneWidth) {
            [translateX, translateY] = [translateY, translateX];
        }
        const rotate = `${rotateAngle}rad`;
        transform = [{ translateX }, { translateY }, { rotate }];
    }
    return transform;
};
const getGradientEndDirection = (boneLayout, componentSize, animationType, animationDirection) => {
    let direction = { x: 0, y: 0 };
    if (animationType === 'shiver') {
        if (animationDirection === 'horizontalLeft' ||
            animationDirection === 'horizontalRight') {
            direction = { x: 1, y: 0 };
        }
        else if (animationDirection === 'verticalTop' ||
            animationDirection === 'verticalDown') {
            direction = { x: 0, y: 1 };
        }
        else if (animationDirection === 'diagonalTopRight' ||
            animationDirection === 'diagonalDownRight' ||
            animationDirection === 'diagonalDownLeft' ||
            animationDirection === 'diagonalTopLeft') {
            const boneWidth = getBoneWidth(boneLayout, componentSize);
            const boneHeight = getBoneHeight(boneLayout, componentSize);
            if (boneWidth && boneHeight && boneWidth > boneHeight) {
                return { x: 0, y: 1 };
            }
            return { x: 1, y: 0 };
        }
    }
    return direction;
};
const BoneHelper = {
    getBoneWidth,
    getBoneHeight,
    getBoneStyle,
    getGradientSize,
    getGradientTransform,
    getGradientEndDirection,
};
exports.default = BoneHelper;
