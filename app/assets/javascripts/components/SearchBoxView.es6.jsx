class SearchBoxView extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    keyword = this.refs.keyword.value;
    $.ajax({
      method: 'get',
      url: `http://www.omdbapi.com/?s=${keyword}&r=json`
    })
      .done((response) => {
      this.props.searchedMovies(response);
      })
  }

  render() {
    return (
      <div>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input ref="keyword" id="search" type="text" name="query"/>
        </form>
        <i className="fa fa-search"></i>
      </div>
    )
  }
}
