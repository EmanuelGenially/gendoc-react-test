import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * General component description.
 * You can even use the native Markdown here.
 * E.g.:
 * ```html
 * <MyComponent foo={"hello"} />
 * ```
 */
class MyComponent extends Component {
  /**
   * Pues no hacemos nada al click
   *
   * @param e: event
   */
  handlerClick(e) {
    return null;
  }

  render() {
    return <div onClick={this.handlerClick}>{this.props.foo}</div>;
  }
}

MyComponent.propTypes = {
  /**
   * Description of prop **foo**
   */
  foo: PropTypes.string.isRequired,
  /**
   * Description of prop **foo**
   */
  bar: PropTypes.number
};

export default MyComponent;
