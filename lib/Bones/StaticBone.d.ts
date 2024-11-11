import { ICustomViewStyle } from '../Constants';
type StaticBoneProps = {
    layoutStyle: ICustomViewStyle;
    id: number | string;
};
declare const StaticBone: ({ layoutStyle, id }: StaticBoneProps) => JSX.Element;
export default StaticBone;
