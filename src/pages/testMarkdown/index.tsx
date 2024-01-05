import ReactMarkdown from "react-markdown";
const TestMarkdown = () => {
  return (
    <div>
      <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
      {/* Normally we recommend using `import` for getting asset URLs */}
      <img src={process.env.PUBLIC_URL + "/logo512.png"}></img>
      <small>current public_path:{process.env.PUBLIC_URL}</small>
    </div>
  );
};
export default TestMarkdown;
