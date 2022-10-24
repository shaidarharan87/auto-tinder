import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';
import CarFormStepOne from '../features/onboarding/slice';
import AuthSlice from '../features/Auth/slice';

export const rootReducer = combineReducers({
  mainInfo: mainSlice,
  auth: AuthSlice,
  userProfile: CarFormStepOne,
});
