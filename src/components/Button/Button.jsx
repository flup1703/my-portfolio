export default function Button({href, text}) {
  return (
      <a className='font-bold p-3 rounded-3xl m-2 w-fit h-fit bg-(--main-background) text-(--main-foreground) border-(--main-border) hover:translate-y-0.5 transition ease-in' href={href}>{text}</a>
  );
};
