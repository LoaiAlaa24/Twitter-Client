export const initialState = {
    tweets:[],
    isLoading:false
};

const tabsScreenReducer = (state = initialState, action) => {
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
        case 'ACTION_GET_TWEETS_LOADING':
             return {
                    ...state,
                    isLoading: true,
                };
        case 'ACTION_GET_TWEETS':
            return {
                tweets: action.data,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default tabsScreenReducer;