import { connect } from 'react-redux';
import { getSelectedIdentity } from '../../../selectors';
import {
  getHtmlcoinAddress,
  isHtmlcoinAddressShow,
} from '../../../ducks/metamask/metamask';
import SelectedAccount from './selected-account.component';

const mapStateToProps = (state) => {
  return {
    selectedIdentity: getSelectedIdentity(state),
    htmlcoinAddress: getHtmlcoinAddress(state, getSelectedIdentity(state).address),
    isHtmlcoinAddressShow: isHtmlcoinAddressShow(state),
  };
};

export default connect(mapStateToProps)(SelectedAccount);
