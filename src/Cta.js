import React from 'react';

class Cta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const className = [
      'cta',
      this.props.focused ? 'focused' : ''
    ].join(' ');

    return (
      <div className={className}>
      </div>
    )
  }
}

export default Cta;