import React from 'react';
import './App.scss';
import Genre from './Genre';
import Focusable from './Focusable';
import KeypressAnnouncer from './KeypressAnnouncer';

class App extends Focusable {
  constructor(props) {
    super(props);

    this.childRef0 = React.createRef();
    this.childRef1 = React.createRef();
    this.childRef2 = React.createRef();

    this.keypressAnnouncerRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.navigate.bind(this), true);

    this.setState({
      focusedIndex: 0
    })
  }

  navigate(e) {
    const key = e.key;
    const focusedRef = this['childRef' + this.state.focusedIndex];
    const canNavigateRight = this.state.focusedIndex < 2;
    const canNavigateLeft = this.state.focusedIndex > 0;

    this.keypressAnnouncerRef.current.announce(key);
    
    if (focusedRef.current.navigate?.(key)) {
      return;
    }

    if (key === 'ArrowRight' && canNavigateRight) {
      this.setState({
        focusedIndex: this.state.focusedIndex + 1
      });
    }

    if (key === 'ArrowLeft' && canNavigateLeft) {
      this.setState({
        focusedIndex: this.state.focusedIndex - 1
      });
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.generateChildren({
            component: Genre, 
            count: 3
          })
        }

        <KeypressAnnouncer ref={this.keypressAnnouncerRef}  />
      </div>
    )
  }
}

export default App;