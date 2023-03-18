import api from './api.js';

const addLike = async (id) => {
  try {
    await fetch(api.likesUrl, {
      method: 'POST',
      body: JSON.stringify({ item_id: id }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.location.reload();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default addLike;
