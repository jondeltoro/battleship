import { Dashboard } from '../dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { validateAttack } from '../../actions';

const mapStateToProps = ({ layout, gameOver }) => ({
  layout,
  gameOver,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      validateAttack,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
