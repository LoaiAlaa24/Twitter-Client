import React from 'react';
import { ErrorResponse, AccessToken, TwitterUser } from '../types';
declare type Props = {
    type: 'TouchableOpacity' | 'TouchableHighlight' | 'TouchableWithoutFeedback';
    headerColor: string;
    callbackUrl: string;
    closeText: string;
    onPress: (e: any) => void;
    onGetAccessToken: (token: AccessToken) => void;
    onClose: (e: any) => void;
    onSuccess: (user: TwitterUser) => void;
    onError: (e: ErrorResponse) => void;
    renderHeader: (props: any) => React.ReactElement<{}>;
    children: any;
};
declare function TWLoginButton(props: Props): JSX.Element | null;
declare namespace TWLoginButton {
    var defaultProps: {
        type: string;
        headerColor: string;
        callbackUrl: null;
        closeText: string;
        onPress: () => void;
        onGetAccessToken: () => void;
        onClose: () => void;
        onError: () => void;
        renderHeader: null;
        children: null;
    };
}
export default TWLoginButton;
