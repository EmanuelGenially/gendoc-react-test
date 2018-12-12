import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * General component description.
 * You can even use the native Markdown here.
 * E.g.:
 * ```html
 * <MyComponent foo={541} />
 * ```
 */
class OtherComponent extends Component {
  render() {
    return <div>{this.props.foo}</div>;
  }
}

OtherComponent.propTypes = {
  /**
   * Description of prop **foo**
   */
  foo: PropTypes.number
};

export default OtherComponent;
