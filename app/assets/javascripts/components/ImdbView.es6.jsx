class ImdbView extends React.Component {
   constructor(){
    super()
    this.state = {
      movies: []
    }
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }
    updateSearchResults(results) {
      this.setState({
        movies: results
      })
    }

    render() {

      return (
        <div>
        <header id="top-nav">
          <div id="brand">Lil' IMDB API</div>
          <SearchBoxView searchedMovies={this.updateSearchResults} />
        </header>
        <section className="container">
        <SearchResultsView movies={this.state.movies}/>
        </section>
        </div>
      )
    }


}
