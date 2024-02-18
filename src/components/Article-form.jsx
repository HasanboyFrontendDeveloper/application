import { useSelector } from "react-redux";
import { Input, TextArea } from "../ui";

const ArticleForm = (props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  } = props;

  const {isLoading} = useSelector(state => state.article)

  return (
    <form onSubmit={formSubmit}>
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea
        label={"Body"}
        state={body}
        setState={setBody}
        height={"200px"}
      />
      <button className="btn btn-primary w-100 mt-5" type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default ArticleForm;
