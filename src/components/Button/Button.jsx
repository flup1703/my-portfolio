import "./button.css";

export default function Button({href, text, type}) {
  return (
    <a href={`#${href}`} className={`btn ${type}`}>{text}</a>
  );
};
