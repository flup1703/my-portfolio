export default function SkillCard({title, text, icon}) {
  return (
    <div className="flex items-center text-center gap-1.5 flex-col border text-(--main-muted-foreground) bg-(--main-background) border-(--main-muted-border) p-5 rounded-2xl hover:text-(--main-foreground) hover:border-(--main-border)">
      <i className={`${icon} flex items-center content-center text-5xl h-20`}></i>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="">{text}</p>
    </div>
  );
}
