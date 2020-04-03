//function executed by carousel item to add favorites
export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
});

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
});

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})