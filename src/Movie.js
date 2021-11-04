import React from 'react';
import Cta from './Cta';
import Focusable from './Focusable';

class Movie extends Focusable {

  constructor(props) {
    super(props);
    
    this.childRef0 = React.createRef();
    this.childRef1 = React.createRef();
  }

  navigate(key) {
    const canNavigateRight = this.state.focusedIndex === 0;
    const canNavigateLeft = this.state.focusedIndex  === 1;

    if (key === 'Enter') {
      this.setState({
        focusedIndex: 0
      });
      return true;
    }

    if (key === 'ArrowRight' && canNavigateRight) {
      this.setState({
        focusedIndex: this.state.focusedIndex + 1
      });
      return true;
    }

    if (key === 'ArrowLeft' && canNavigateLeft) {
      this.setState({
        focusedIndex: this.state.focusedIndex - 1
      });
      return true;
    }
  }

  render() {
    const className = [
      'movie',
      this.props.focused && this.state.focusedIndex === null ? 'focused' : ''
    ].join(' ');

    return (
      <div className={className}>
        {
          this.generateChildren({
            component: Cta, 
            count: 2
          })
        }
      </div>
    )
  }
}

export default Movie;