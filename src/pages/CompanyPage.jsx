import { useParams, Link } from "react-router-dom";

const CompanyPage = ({ companies }) => {
  const { companySlug } = useParams();

  console.log("companySlug en URL:", companySlug);
  console.log("Lista de slugs disponibles:", companies?.map(c => c.slug) || "No hay datos");

  if (!companies || companies.length === 0) {
    return <h2>Cargando empresas...</h2>;
  }

  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return <h2>Empresa no encontrada</h2>;
  }

  return (
    <div>
      <h1>{company.companyName}</h1>
      <img src={company.logo} alt={company.companyName} width="100" />
      <p>
        Sitio web: <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">{company.website}</a>
      </p>

      <h2>Pila Tecnológica</h2>
      {company.techStack && company.techStack.length > 0 ? (
        <ul>
          {company.techStack.map((tech) => (
            <li key={tech.slug}>
              <Link to={`/tech/${tech.slug}`}>
                <img src={tech.image} alt={tech.name} width="40" />
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Esta empresa no tiene tecnologías registradas.</p>
      )}
      <Link to="/">⬅️ Volver a la lista</Link>
    </div>
  );
};

export default CompanyPage;
