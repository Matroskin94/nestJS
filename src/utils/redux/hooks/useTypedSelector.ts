
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../storeConfig';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;