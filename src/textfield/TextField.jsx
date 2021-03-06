import React, { PropTypes } from 'react'

class TextField extends React.Component {

  state = {
    focused: false,
    invalid: false,
    errors: [],
  }

  onFocus = () => {
    this.setState({
      ...this.state,
      focused: true,
    });
  }

  componentWillMount() {
    const { value, errors } = this.props;
    const focused = !!value;
    const invalid = !!errors;
    this.setState({
      focused,
      invalid,
      errors: errors || []
    });
  }

  mapErrors = () => {
    const { errors } = this.props;
    return errors.map(error => (<b>{error}</b>));
  }

  render () {
    const { focused, invalid } = this.state;
    const { labelName, value, onClick } = this.props;
    const isFocused = (focused) ? 'is-focused' : '';
    const isInvalid = (invalid) ? 'is-invalid' : '';
    const errors = this.mapErrors();
    return (
      <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${isInvalid} ${isFocused}`}>
        <input
          className="mdl-textfield__input"
          type="text"
          id="datepicker"
          value={value}
          readOnly
          onFocus={this.onFocus}
          onClick={onClick}
        />
        <label className="mdl-textfield__label" htmlFor="datepicker">{labelName}</label>
        <span className="mdl-textfield__error">{errors}</span>
      </div>
    );
  }
}

export default TextField;
