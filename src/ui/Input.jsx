const Input = ({label, type = 'text', state, setState}) => {

  return (
    <div class="form-floating mt-2">
      <input
        type={type}
        class="form-control"
        id="floatingInput"
        placeholder={label}
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
