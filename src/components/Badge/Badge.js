import "./Badge.css";

const Badge = ({name}) => {
  return <div className={`col badge badge-${name}`}>{name}</div>;
};

export default Badge;
