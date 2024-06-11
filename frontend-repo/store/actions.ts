export const updateRequest = () => ({ type: 'UPDATE_REQUEST' });
export const updateSuccess = (data: any) => ({ type: 'UPDATE_SUCCESS', payload: data });
export const updateFailure = (error: any) => ({ type: 'UPDATE_FAILURE', payload: error });
