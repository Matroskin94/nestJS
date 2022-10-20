import { useDispatch } from 'react-redux';
import { AppDispatch } from '../storeConfig';

export const useTypedDispatch = () => useDispatch<AppDispatch>();