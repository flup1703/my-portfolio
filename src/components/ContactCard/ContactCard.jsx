export default function ContactCard({title, text, icon, href}) {
  return (
    <div className="text-center">
      <div className="contact-icon">
        <i className={`${icon} text-(--main-foreground) text-4xl mb-5 max-[450px]:text-2xl`}></i>
      </div>
      <p className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1">{title}</p>
      <a className="text-(--main-muted-foreground) hover:text-(--main-foreground)" href={href}>{text}</a>
    </div>
  );
};
