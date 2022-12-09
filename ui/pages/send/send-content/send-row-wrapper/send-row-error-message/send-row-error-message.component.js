import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getValueFromWeiHex } from '../../../../../helpers/utils/conversions.util';
import { HTMLCOIN } from '../../../../../helpers/constants/common';

export default class SendRowErrorMessage extends Component {
  static propTypes = {
    errors: PropTypes.object,
    errorType: PropTypes.string,
    htmlcoinBalance: PropTypes.string,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  getDecimalValue(props) {
    const { htmlcoinBalance: hexValue } = props;
    const decimalValueString = getValueFromWeiHex({
      value: hexValue,
      fromCurrency: HTMLCOIN,
      toCurrency: HTMLCOIN,
      numberOfDecimals: 6,
    });

    return Number(decimalValueString) || 0;
  }

  render() {
    const { errors, inErrorHtmlcoin, errorType, htmlcoinBalance } = this.props;

    const errorMessage = errors[errorType];

    return errorMessage ? (
      <div
        className={classnames('send-v2__error', {
          'send-v2__error-amount': errorType === 'amount',
        })}
      >
        {this.context.t(errorMessage)}{' '}
        {htmlcoinBalance !== null && inErrorHtmlcoin
          ? `${this.context.t(errors.htmlcoinBalances)} ${this.getDecimalValue(
              this.props,
            )} ${HTMLCOIN}`
          : ''}
      </div>
    ) : null;
  }
}
