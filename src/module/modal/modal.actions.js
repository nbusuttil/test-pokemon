export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = id => ({
  type: OPEN_MODAL,
  id
});

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => ({
  type: CLOSE_MODAL
});
