import { connect } from 'react-redux';
import {
  getSendErrors,
  getSendAsset,
  getHtmlcoinSpendableBalanceInString,
  sendHtmlcoinAmountIsInError,
} from '../../../../../ducks/send';
import { ASSET_TYPES } from '../../../../../../shared/constants/transaction';
import SendRowErrorMessage from './send-row-error-message.component';

export default connect(mapStateToProps)(SendRowErrorMessage);

function mapStateToProps(state, ownProps) {
  return {
    errors: getSendErrors(state),
    inErrorHtmlcoin: sendHtmlcoinAmountIsInError(state),
    errorType: ownProps.errorType,
    htmlcoinBalance:
      getSendAsset(state).type === ASSET_TYPES.NATIVE
        ? getHtmlcoinSpendableBalanceInString(state)
        : null,
  };
}
