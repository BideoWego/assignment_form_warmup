import React, {Component} from 'react'
import serialize from 'form-serialize'
import SerializedForm from '../components/SerializedForm'
import {validateForm} from '../helpers'

class SerializedFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      success: false,
      errors: {},
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = serialize(form, {hash: true})
    const errors = validateForm(data)

    if (errors) {
      this.setState({errors})
    } else {
      console.log(data)
      this.formSuccess(form)
    }
  }

  formSuccess(form) {
    form.reset()
    this.setState({
      success: true,
      errors: {},
    }, () => console.log('Success!'))
  }

  render() {
    return (
      <SerializedForm
        onSubmit={this.onSubmit}
        success={this.state.success}
        errors={this.state.errors}
      />
    )
  }
}

export default SerializedFormContainer
