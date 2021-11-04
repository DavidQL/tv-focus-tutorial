import React from 'react';
import Cta from './Cta';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.ctaRef0 = React.createRef();
    this.ctaRef1 = React.createRef();

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

    const ctas = [0,1].map((i) => {
      const thisRef = this['ctaRef' + i];
      const focused = i === this.state.focusedIndex;

      return (
        <Cta key={i} ref={thisRef} focused={focused} />
      )
    })

    return (
      <div className={className}>
        {ctas}
      </div>
    )
  }
}

export default Movie;