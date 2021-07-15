export default function Card({movie}) {
  return (
   <div className="movies-box">
     <img src={movie.poster.name} alt=""/>
     <h3>{movie.title}</h3>
   </div>
  )
}
