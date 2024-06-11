import { useDispatch, useSelector } from 'react-redux';
import { updateRequest, updateSuccess, updateFailure } from '../store/actions';
import axios from 'axios';
import { RootState } from '../store/store';
import { Button, Typography } from '@mui/material';

const UpdateButton = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state: RootState) => state.update);

    const handleUpdate = async () => {
        dispatch(updateRequest());

        try {
            const response = await axios.get('/api/update');
            dispatch(updateSuccess(response.data));
        } catch (err) {
            if (axios.isAxiosError(err)) {
                dispatch(updateFailure(err.message));
            } else {
                dispatch(updateFailure('An unexpected error occurred'));
            }
        }
    };

    return (
        <div>
            <Button onClick={handleUpdate} disabled={loading}>
                {loading ? 'Loading...' : 'Update Data'}
            </Button>
            {data && <Typography>{data}</Typography>}
            {error && <Typography color="error">{error}</Typography>}
        </div>
    );
};

export default UpdateButton;
