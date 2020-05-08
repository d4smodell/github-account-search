export const SHOW_ALERT = "SHOW_ALERT";
export const HIDE_ALERT = "HIDE_ALERT";

export const alertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return action.payload;
    }
    case HIDE_ALERT: {
      return null;
    }
    default:
      return state;
  }
};

// const SHOW_ALERT = "SHOW_ALERT";
// const HIDE_ALERT = "HIDE_ALERT";

// const handlers = {
//     [SHOW_ALERT]: (state, action) => action.payload,
//     [HIDE_ALERT]: () => null,
//     DEFAULT: state => state
// }

// export const alertReducer = (state, action) => {
//   const handler = handlers[action.type] || handlers.DEFAULT
//   return handler(state, action)
// };

