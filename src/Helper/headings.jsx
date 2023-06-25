export const H1 = ({ text, color = false, center = false }) => {
  return (
    <h1
      style={{
        color: color ? color : null,
        textAlign: center ? "center" : null,
      }}
      className="helper-h1"
    >
      {text}
    </h1>
  );
};
export const H2 = ({ text, color = false, center = false }) => {
  return (
    <h2
      style={{
        color: color ? color : null,
        textAlign: center ? "center" : null,
      }}
      className="helper-h2"
    >
      {text}
    </h2>
  );
};

export const H3 = ({
  text,
  color = false,
  pointer = false,
  onClick = () => {},
}) => {
  return (
    <h3
      onClick={onClick}
      style={{
        color: color ? color : null,
        cursor: pointer ? pointer : null,
      }}
      className="helper-h3"
    >
      {text}
    </h3>
  );
};
export const H4 = ({ text, color = false }) => {
  return (
    <h4
      style={{
        color: color ? color : null,
      }}
      className="helper-h4"
    >
      {text}
    </h4>
  );
};
export const H5 = ({ text, color = false }) => {
  return (
    <h5
      style={{
        color: color ? color : null,
      }}
      className="helper-h5"
    >
      {text}
    </h5>
  );
};
