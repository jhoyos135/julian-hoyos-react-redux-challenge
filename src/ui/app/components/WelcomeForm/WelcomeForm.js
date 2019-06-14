/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */

import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import * as actions from '../../containers/actions'
import {required, minLength} from './Validate_2';
import { RFTextField } from 'components/ReduxFormFields/RFTextField';
import LuckyNumber from '../../containers/LuckyNumber/LuckyNumber';

class WelcomeForm extends Component {

  state = {
    show: false
  };

  fetchNums = (v) => {
    this.props.actions.fetchLuckyNumber(v)
  };

  submit(){
    const num = this.state.userName;
    this.fetchNums(num)

    this.setState({
      show: true
    });
  };
    
  handleFirstName = (e) => {
    return this.props.actions.firstNameValue({
      firstName: e.target.value
    })
  };
  handleLastName = (e) => {
    return this.props.actions.lastNameValue({
      lastName: e.target.value
    })
  };
  handleUserName = (e) => {
    return this.props.actions.userNameValue({
      userName: e.target.value
    })
  };
  
  renderResults = () => {
    return (
      <LuckyNumber />
    )
  };

  render() {
    const {handleSubmit} = this.props;
    return (
      <Fragment>

{!this.state.show &&
     ( <form
        style={{alignItems:'center'}}
        onSubmit={handleSubmit(this.submit.bind(this))}
        className="flex flex-column">

        <Field
          name='firstName'
          component={RFTextField}
          label='First Name'
          validate={[required, minLength]}
          onChange={this.handleFirstName}
        />
        <Field
          name='lastName'
          component={RFTextField}
          label='Last Name'
          validate={[required, minLength]}
          onChange={this.handleLastName}
        />
        <Field
          name='userName'
          component={RFTextField}
          label='User Name'
          validate={[required, minLength]}
          onChange={this.handleUserName}
        />

        <div className="center mt3">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>)  
}
{this.state.show &&
        <Fragment>
        { this.renderResults()}
        </Fragment>
}
      </Fragment>
    );
  }
}

WelcomeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default compose(
  reduxForm({
    form: 'welcome'
  }),
  connect(null, mapDispatchToProps)
)(WelcomeForm);
