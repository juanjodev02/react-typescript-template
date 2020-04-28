import { connect } from 'react-redux';
import { RootState } from '../../store';
import { addCounter, minCounter } from '../../store/counter/actions';
import Counter from './Counter';

const mapStateToProps = (state: RootState) => ({
  value: state.counter.value,
});

const mapDispatchToProps = { addCounter, minCounter };

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    title: string;
  };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
