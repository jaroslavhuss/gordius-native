export default (state, action) => {
  switch (action.type) {
    case "VYPNI_ZAPNI_COMPONENTU":
      return {
        ...state,
        zobrazitSeparovanouComponentu: action.payload,
      };
    case "VYBER_COMPONENTY":
      return {
        ...state,
        aktivniComponenta: action.payload,
      };

    default:
      return state;
  }
};
