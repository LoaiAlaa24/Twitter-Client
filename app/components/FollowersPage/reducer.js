export const initialState = {
    email: "",
    follower:"",
    arabicBtn: false,
    lang:"",
    isLoading:false,
    isError:false
};

const followersPageReducer = (state = initialState, action) => {
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
        case 'NAVIGATE_TO_FOLLOWER':
            return {
                ...state,
                user: action.data,
                isLoading: true,
            };
        default:
            return state;
    }
};

export default followersPageReducer;