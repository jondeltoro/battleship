import { Score } from '../score';
import { connect } from 'react-redux';

const mapStateToProps = ({ results }) => ({
  results,
});

export default connect(mapStateToProps)(Score);
