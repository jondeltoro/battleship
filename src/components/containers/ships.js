import { Ships } from '../ships';
import { connect } from 'react-redux';

const mapStateToProps = ({ layout }) => ({
  layout,
});

export default connect(mapStateToProps)(Ships);
