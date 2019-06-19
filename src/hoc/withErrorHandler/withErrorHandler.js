import React, { Fragment } from "react";
import useError from "../../hooks/useError";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useError(axios);
    return (
      <Fragment>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    )
  }
}

export default withErrorHandler;