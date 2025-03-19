import { useParams, Link } from "react-router-dom";

const TechnologyPage = ({ technologies }) => {
  const { slug } = useParams();
  const technology = technologies.find((t) => t.slug === slug);

  if (!technology) {
    return <h2>Tecnología no encontrada</h2>;
  }

  return (
    <div>
      <h1>{technology.name}</h1>
      <img src={technology.image} alt={technology.name} width="100" />
      <p>{technology.description}</p>
      <Link to="/">⬅️ Volver a la lista</Link>
    </div>
  );
};

export default TechnologyPage;
