import Badge from "./Badge";

function Card({
  image,
  title,
  description,
  price,
  status
}) {
  return (
    <div className="card">

      <img
        src={image}
        alt={title}
      />

      <h2>{title}</h2>

      <p>{description}</p>

      <h3>{price}</h3>

      <Badge
        text={status}
        bgColor="green"
      />

    </div>
  );
}

export default Card;