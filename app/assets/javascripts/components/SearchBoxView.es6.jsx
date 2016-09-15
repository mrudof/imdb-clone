class SearchBoxView extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var searchContent = this.refs.keyword;
    var keyword = this.refs.keyword.value;
    var replaced = keyword.split(' ').join('+');
    $.ajax({
      method: 'get',
      url: `http://www.omdbapi.com/?s=${replaced}&r=json`
    })
      .done((response) => {
        if (response["Search"]) {
          this.props.searchedMovies(response["Search"]);
          searchContent.value = "";
        } else {
          this.props.searchedMovies(response["Response"])
          searchContent.value = "Doesn't exist";
          }
      })
  }

  render() {
    return (
      <div>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input ref="keyword" id="search" type="text" name="query" placeholder="Movie title"/>
        </form>
        <i className="fa fa-search"></i>
      </div>
    )
  }
}
