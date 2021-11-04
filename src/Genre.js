import React from 'react';
import Movie from './Movie';

class Genre extends React.Component {
  constructor(props) {
    super(props);

    this.movieRef0 = React.createRef();
    this.movieRef1 = React.createRef();
    this.movieRef2 = React.createRef();

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
    const canNavigateRight = this.state.focusedIndex < 2;
    const canNavigateLeft = this.state.focusedIndex > 0;
    const focusedRef = this['movieRef' + this.state.focusedIndex];

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

    const movies = [0,1,2].map((i) => {
      const thisRef = this['movieRef' + i];
      const focused = i === this.state.focusedIndex;

      return (
        <Movie key={i} ref={thisRef} focused={focused} />
      )
    });

    const genreTitles = ['Drama', 'Comedy', 'Thriller'];

    return (
      <div className={className}>
        <div className="genre-title">Genre: {genreTitles[this.props.i]}</div>
        <div className="movies">
          {movies}
        </div>
      </div>
    )
  }
}

export default Genre;