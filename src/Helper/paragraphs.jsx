export const P1 = ({ text, color = false, center = false }) => {
  return (
    <p
      style={{
        color: color ? color : null,
        textAlign: center ? "center" : null,
      }}
      className="helper-p1"
    >
      {text}
    </p>
  );
};
