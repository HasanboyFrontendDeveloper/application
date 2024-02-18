const TextArea = ({ label, state, setState, height = '50px' }) => {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder={label}
        id="floatingTextarea"
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{height: height}}
      ></textarea>
      <label htmlFor="floatingTextarea">{label}</label>
    </div>
  );
};

export default TextArea;
