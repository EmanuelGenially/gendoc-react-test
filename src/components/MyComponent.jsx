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
  render() {
    return <div>{this.props.foo}</div>;
  }
}

MyComponent.propTypes = {
  /**
   * Description of prop **foo**
   */
  foo: PropTypes.string.isRequired
};

export default MyComponent;
