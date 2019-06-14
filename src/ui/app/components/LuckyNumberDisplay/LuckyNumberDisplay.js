/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    const { firstName, lastName, luckyNumber } = this.props;
    const styles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    };

    return (
      <div style={styles} className="mt5 pa4 center bg-light-gray">
      <p>
         <span> Hello, {firstName} </span> <span>  {lastName} </span> !
        </p>
        <p>your Lucky number is</p>
        {
          luckyNumber === undefined ? 
          <p>finding your lucky number </p> :
        <p> { luckyNumber } </p>
        }
      </div>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  luckyNumber: PropTypes.number
};

export default LuckyNumberDisplay;
