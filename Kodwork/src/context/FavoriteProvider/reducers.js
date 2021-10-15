import {Alert} from 'react-native';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {job} = action.payload;

      const filtered = state.favoriteList.find(item => item.id === job.id);

      let newList = [];

      if (filtered) {
        Alert.alert('Warning', 'Available in the favorite list.');

        return state;
      } else {
        newList = [...state.favoriteList, job];

        return {...state, favoriteList: newList};
      }

    case 'REMOVE_FAVORITE':
      const {id} = action.payload;

      const list = state.favoriteList.filter(item => item.id !== id);

      return {...state, favoriteList: list};

    default:
      return state;
  }
};
