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
   * Hace un console.log
   *
   * @param e: event
   * @param description: texto plano a mostrar
   */
  consoleComponent(e, description) {
    console.log(description, e);
  }

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
   * Description of prop **bar**
   */
  bar: PropTypes.number
};

export default MyComponent;
