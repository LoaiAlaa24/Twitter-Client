/// <reference types="react" />
import { ViewStyle } from 'react-native';
declare type Props = {
    headerColor: string;
    style: ViewStyle;
    closeText: string;
    onClose: (e: any) => void;
};
declare function Header(props: Props): JSX.Element;
declare namespace Header {
    var defaultProps: {
        headerColor: string;
        style: null;
        closeText: string;
        onClose: () => void;
    };
}
export default Header;
