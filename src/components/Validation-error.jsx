import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMsg = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} ${msg}`;
    });
  }, [error]);


  return (
    error !== null &&
      <div class="alert alert-danger p-1 m-2 " role="alert">
        {errorMsg()[0]}
      </div>
  );
};

export default ValidationError;
