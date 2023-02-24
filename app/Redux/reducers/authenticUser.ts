const initialState = {
  authentic: false,
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'AUTHENTIC_USER':
      return {
        ...state,
        authentic: true,
      };
    default:
      return state;
  }
};
