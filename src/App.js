import React from 'react';
import './App.scss';
import Genre from './Genre';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.genreRef0 = React.createRef();
    this.genreRef1 = React.createRef();
    this.genreRef2 = React.createRef();

    this.state = {
      focusedIndex: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.navigate.bind(this), true);
  }

  navigate(e) {
    const key = e.key;
    const focusedRef = this['genreRef' + this.state.focusedIndex];
    const canNavigateRight = this.state.focusedIndex < 2;
    const canNavigateLeft = this.state.focusedIndex > 0;

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
    const genres = [0,1,2].map((i) => {
      const thisRef = this['genreRef' + i];
      const focused = i === this.state.focusedIndex;

      return (
        <Genre key={i} ref={thisRef} focused={focused} i={i} />
      )
    });

    return (
      <div className="App">
        {genres}
      </div>
    )
  }
}

export default App;