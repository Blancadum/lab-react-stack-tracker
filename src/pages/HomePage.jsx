import { Link } from "react-router-dom";

const HomePage = ({ companies }) => {
  if (!companies || companies.length === 0) {
    return <h2>Cargando empresas...</h2>;
  }

  return (
    <div>
      <h1>StackTracker: Discover tech Stacks Used by Top Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={company.companyName} width="50" />
              {company.companyName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;