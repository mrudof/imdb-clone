class SearchResultsView extends React.Component {

  render() {
  return(
      <section id="movies-container">
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

