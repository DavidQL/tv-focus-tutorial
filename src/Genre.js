import React from 'react';
import Movie from './Movie';
import Focusable from './Focusable';

class Genre extends Focusable {

  constructor(props) {
    super(props);
    
    this.childRef0 = React.createRef();
    this.childRef1 = React.createRef();
    this.childRef2 = React.createRef();
  }

  navigate(key) {
    const canNavigateRight = this.state.focusedIndex < 2;
    const canNavigateLeft = this.state.focusedIndex > 0;
    const focusedRef = this['childRef' + this.state.focusedIndex];

    if (focusedRef?.current.navigate?.(key)) {
      return true;
    }

    if (key === 'Enter') {
      this.setState({
        focusedIndex: 0
      });
      return true;
    }

    if (key === 'ArrowRight' && canNavigateRight && this.state.focusedIndex !== null) {
      this.setState({
        focusedIndex: this.state.focusedIndex + 1
      });
      return true;
    }

    if (key === 'ArrowLeft' && canNavigateLeft && this.state.focusedIndex !== null) {
      this.setState({
        focusedIndex: this.state.focusedIndex - 1
      });
      return true;
    }
  }

  render() {
    const className = [
      'genre',
      this.props.focused && this.state.focusedIndex === null ? 'focused' : ''
    ].join(' ');

    const genreTitles = ['Drama', 'Comedy', 'Thriller'];

    return (
      <div className={className}>
        <div className="genre-title">Genre: {genreTitles[this.props.i]}</div>
        <div className="movies">
          {
            this.generateChildren({
              component: Movie, 
              count: 3
            })
          }
        </div>
      </div>
    )
  }
}

export default Genre;