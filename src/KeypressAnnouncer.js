import React from 'react';
import './KeypressAnnouncer.scss';

class KeypressAnnouncer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      keys: []
    };
  }

  announce(key) {
    let keys = this.state.keys.slice();

    keys.push(key);

    this.setState({
      keys: keys
    });
  }

  render() {
    return (
      <div className="keypress-announcer">
        Key pressed:
        {this.state.keys.map((key, i) => {
          return (
            <div className="key" key={i}>
              {key}
            </div>
          )
        })}
      </div>
    );
  }
}

export default KeypressAnnouncer;