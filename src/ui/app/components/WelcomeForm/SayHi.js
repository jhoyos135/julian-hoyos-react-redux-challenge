import React from 'react'

const SayHi = (props) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const {firstName, lastName, luckyNumber} = props;
  console.log(props)
  const name = firstName.firstName;
  const last = lastName.lastName;
  const lucky = luckyNumber;
    return (
        <div style={styles}>
        <p>
         <span> Hello, {name} </span> <span>  {last} </span> !
        </p>
        <p>your Lucky number is</p>
        <p> { lucky } </p>
      </div>
    )
};

export default SayHi
