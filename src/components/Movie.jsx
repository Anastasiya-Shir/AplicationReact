import Button from "./Button";

const Movie = (props) => {
  const { item } = props;

  return (
    <div >

      <div className='filmCard' >

        <h1>{item.name}</h1>

        <img src={item.posterLink} alt='movie' />

        <Button buttonFir={item.eventId} />
      </div>
    </div>
  )
}

export default Movie;
