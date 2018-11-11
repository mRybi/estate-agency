import { RootState } from 'src/store';
import { Dispatch } from '../../node_modules/redux';



export type AppDispatch = Dispatch<RootState>;
export type MapStateToProps<TStateProps> = (state: RootState) => TStateProps;
export type MapDispatchToProps<TDispatchProps> = (dispatch: AppDispatch) => TDispatchProps;