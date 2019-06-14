/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import LuckyNumberDisplay from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';

import { CONTAINER_KEY } from '../constants';

class LuckyNumber extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state._root.entries[2][1].userName.userName,
    firstName: state._root.entries[2][1].firstName.firstName,
    lastName: state._root.entries[2][1].lastName.lastName,
    luckyNumber: state._root.entries[2][1].luckyNumber
  }
};

export default connect(mapStateToProps, null)(LuckyNumber);
