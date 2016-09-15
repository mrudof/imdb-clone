class MovieView extends React.Component  {


      render() {
        let data = this.props.data,
        imgLink = data["Poster"];
        return (
        <li className="movie">
        <div className="movie-content">
          <p>
            <span>{data["Title"]}</span>
            <br/>
            <span>Year: {data["Year"]}</span>
            <br/>
            <span>Type: {data["Type"]}</span>
            <br/>
            <img src={imgLink}/>
            <br/>
          </p>
        </div>
        </li>
        )
      }
}
