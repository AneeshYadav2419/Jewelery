import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-8">
      <Link to="/" className="hover:text-accent transition-colors">Home</Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <span>/</span>
          {item.link ? (
            <Link to={item.link} className="hover:text-accent transition-colors">{item.label}</Link>
          ) : (
            <span className="text-primary font-bold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
