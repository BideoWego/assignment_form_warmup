import React from 'react'
import PropTypes from 'prop-types'
import {Alert} from 'reactstrap'
import {isEmpty} from '../helpers'


const ErrorMessage = ({errors}) => {
  if (isEmpty(errors)) {
    return null
  }

  return (
    <Alert color="danger">
      Oops, looks like you have some errors...
    </Alert>
  )
}

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
}

ErrorMessage.defaultProps = {
  errors: {},
}

export default ErrorMessage
