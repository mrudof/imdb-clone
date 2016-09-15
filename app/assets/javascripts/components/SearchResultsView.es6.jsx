class SearchResultsView extends React.Component {

  render() {
  return(
      <section id="movies-container">
      <h3>Movies</h3>
    <ul>
    {
      this.props.movies.map((movie, index) => {
        return (<MovieView key={index} data={movie} />)
      })
    }
    </ul>
    </section>
    )
  }

}

