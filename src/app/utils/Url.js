import { currentUsername } from './User';
import proxifyUrl from './ProxifyUrl'; //we want to move proxify into this file.

export const urlProxify = proxifyUrl;

export const urlNotifications = (username, filter) => {
    return '/@' + username + '/notifications' + (filter ? '/' + filter : '');
};

export const urlComment = (comment, childComment) => {
    const urlSegments = [''];
    try {
        urlSegments.push(
            comment.category,
            '@' + comment.author,
            comment.permlink
        );
        if (childComment) {
            urlSegments.push('#@' + childComment.author, childComment.permlink);
        }
    } catch (e) {
        //eslint-disable-line
    }
    return urlSegments.join('/');
};

export const urlProfile = userName => {
    return '/@' + userName;
};

export const urlProfileSettings = username => {
    return `/@${username}/settings`;
};

export const urlSignup = () => {
    return '/pick_account';
};

const Url = {
    comment: urlComment,
    notifications: urlNotifications,
    profile: urlProfile,
    profileSettings: urlProfileSettings,
    proxify: urlProxify,
};

export default Url;
