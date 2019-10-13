import { OPEN_MODAL, CLOSE_MODAL } from './modal.actions';

const initialState = {
  isOpened: false,
  modalId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const { id } = action;

      return { isOpened: !state.isOpened, modalId: id };
    }

    case CLOSE_MODAL: {
      return { isOpened: !state.isOpened };
    }

    default:
      return state;
  }
};
