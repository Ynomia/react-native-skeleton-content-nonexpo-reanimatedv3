import { ICustomViewStyle } from '../Constants';
type BonesProps = {
    bonesLayout: ICustomViewStyle[] | undefined;
    childrenItems: any;
};
declare const Bones: ({ bonesLayout, childrenItems }: BonesProps) => any;
export default Bones;
