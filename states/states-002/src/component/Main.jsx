import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Main = (props) => {
  const markdown = props.markupdata;
  return (
    <div className="screen">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Main;