import "./button.css";

export default function Button({href, text, type}) {
  return (
      <a className={`btn ${type}`} href={href}>{text}</a>
  );
};
