import React, {Component} from 'react'
import ControlledForm from '../components/ControlledForm'
import serialize from 'form-serialize'
import { validateForm, validateField } from '../helpers';

class ControlledFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }
  }

  onChangeInput = (e) => {
    const { name, value } = e.target;
    const data = { [name]: value };

    const fieldErrors = value ?
      validateField(name, data) : null;

    const errors = Object.assign(
      {},
      this.state.errors,
      fieldErrors
    );

    if (!fieldErrors) {
      delete errors[name];
    }

    this.setState({
      ...data,
      errors
    });
  }

  onSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const data = serialize(form, { hash: true });
    const errors = validateForm(data);

    errors ?
      this.setState({ errors }) :
      this.formSuccess();
  }

  formSuccess = () => {
    this.setState({
      success: true,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }, () => console.log('Success!'))
  }

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    )
  }
}

export default ControlledFormContainer
