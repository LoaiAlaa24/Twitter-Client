export const initialState = {
    email: "",
    follower:"",
    arabicBtn: false,
    lang:"",
    isLoading:false,
    isError:false
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
          case "SET_LANGUAGE_EN":
            return {
              ...state,
              lang: "en",
              isError: false,
            };
          case "SET_LANGUAGE_AR":
            return {
              ...state,
              lang:"ar",
              isError: false
            };
        case 'ACTION_GET_FOLLOWERS':
            return {
                ...state,
                followers: action.data,
                isLoading: false,
                isError: false,
            };
        case 'SET_FOLLOWERS_LOADING':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case "ACTION_SET_USER":
            return{
                ...state,
                isLoading:true,
                user:action.user,
            };
        default:
            return state;
    }
};

export default homePageReducer;