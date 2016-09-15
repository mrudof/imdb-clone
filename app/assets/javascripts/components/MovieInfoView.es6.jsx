class MovieInfoView extends React.Component {

render() {
var data = this.props.data;
  return (
    <div>
    <span>Rated: {data["Rated"]}</span><br/>
    <span>Director: {data["Director"]}</span><br/>
    <span>Actors: {data["Actors"]}</span><br/>
    <span>Writer(s): {data["Writer"]}</span><br/>
    <p>{data["Plot"]}</p>
    </div>
  )
}
}
