import {
  CONTENT_POST,
  GET_A_POST,
  IMG_POST,
  GET_POSTS,
  DELETE_POST,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case IMG_POST:
      return {
        ...state,
        url: action.payload.url,
      };

    case CONTENT_POST:
      return {
        ...state,
        postUploadSuccess: action.payload.message,
      };

    case GET_A_POST:
      return {
        ...state,
        postGetSuccess: action.payload.message,
      };

    case GET_POSTS:
      return {
        ...state,
        postsGetSuccess: action.payload.message,
      };

    case DELETE_POST:
      return {
        ...state,
        postDelSuccess: action.payload.message,
      };
    default:
      return state;
  }
}
