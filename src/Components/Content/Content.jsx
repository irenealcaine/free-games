import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const Content = ({ loading, error, children }) => {
  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;
  if (!children) return <p>No hay datos disponibles</p>;
  return <>{children}</>;
};

export default Content;