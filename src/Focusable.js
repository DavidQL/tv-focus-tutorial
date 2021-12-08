import React from 'react';
import _ from 'lodash';

class Focusable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedIndex: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isLosingFocus = prevProps.focused && !this.props.focused;

    if (isLosingFocus) {
      this.setState({
        focusedIndex: null
      })
    }
  }

  generateChildren(opts={}) {
    const children = _.range(0, opts.count).map((i) => {

      const thisRef = this['childRef' + i];
      const focused = i === this.state.focusedIndex;
      const ChildComponent = opts.component;

      return (
        <ChildComponent key={i} ref={thisRef} focused={focused} i={i} />
      )
    });

    return children;
  }
}

export default Focusable;