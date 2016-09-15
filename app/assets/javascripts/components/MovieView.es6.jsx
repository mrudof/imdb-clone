class MovieView extends React.Component  {
  constructor() {
    super();
    this.state = {
      details: [],
      toggleDetails: false
    }
    this.displayDetails = this.displayDetails.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

    showDetails(e){
      e.preventDefault();
      keyword = this.props.data["imdbID"];
      $.ajax({
        method: 'get',
        url: `http://www.omdbapi.com/?i=${keyword}&r=json`
      })
        .done((response) => {
        this.setState({
          details: response,
          toggleDetails: this.state.toggleDetails===false ? true: false
        })
        })

    }

    displayDetails(){
      let {toggleDetails, details} = this.state;
      if (toggleDetails) {
        return <MovieInfoView data={details}/>
      }
      return null;
    }


      render() {
        let data = this.props.data,
         imgLink = data["Poster"],
         movieTitle = data["Title"],
         checkPhoto = imgLink === "N/A" ? "" : <img src={imgLink}/>;


        return (
        <li>
        <div className="movie-content">
          <p>
            <h2 id="movie-title" onClick={this.showDetails}>{movieTitle}</h2>
            <br/>
            <span>Year: {data["Year"]}</span>
            <br/>
            <span>Type: {data["Type"]}</span>
            <br/>
              {checkPhoto}
            <br/>
          </p>
          {this.displayDetails()}
        </div>
        </li>
        )
      }
}
