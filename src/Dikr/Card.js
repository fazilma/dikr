export const Card = ({
  text,
  active = false,
  count = 0,
  displayCount = 33,
  name = "",
  setCount,
}) => {
  const classes = active ? "card card-active" : "card";
  return (
    <div className={classes}>
      <div className="bold-text" style={{ margin: "auto 0" }}>
        {text}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <button
            className="small-button"
            onClick={() => {
              if (count - 1 >= 0) {
                setCount(count - 1, name);
              }
            }}
          >
            -
          </button>
        </div>
        <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          {displayCount}
        </div>
        <div>
          <button
            className="small-button"
            onClick={() => {
              if (count + 1 < 4) {
                setCount(count + 1, name);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
