import React from 'react';
import { ICustomViewStyle } from './Constants';
type BoneContainerProps = {
    layoutStyle: ICustomViewStyle;
    childrenBones: JSX.Element[];
    id: number | string;
    container?: React.ComponentType;
    containerProps?: any;
};
declare const BoneContainer: ({ layoutStyle, childrenBones, id, container, containerProps }: BoneContainerProps) => React.JSX.Element;
export default BoneContainer;
