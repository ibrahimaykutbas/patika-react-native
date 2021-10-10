export default (state, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      const {name} = action.payload;
      const newList = [...state.nameList, name];
      return {...state, nameList: newList};

    case 'ADD_USERNAME':
      return {...state, username: action.payload.username};

    case 'CLEAN_LIST':
      return {
        ...state,
        nameList: [],
        username: '',
      };

    default:
      return state;
  }
};
