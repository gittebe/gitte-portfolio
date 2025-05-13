import "./LinkBox.css";

export const LinkBox = ({ links = [] }) => {
  return (
    <ul className="link-ul">
      {links.map(({ href, label, background }, index) => (
        <li 
        key={index}
        >
          <a
            href={href}
            className={`btn ${background}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

