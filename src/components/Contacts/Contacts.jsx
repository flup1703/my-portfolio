import ContactCard from "../ContactCard/ContactCard";

export default function Contacts() {
  return (
    <section id="contact" className="p-5">
      <div className="container">
        <h2 className="scroll-m-20 text-5xl text-center font-semibold tracking-tight first:mt-0 text-(--main-title) max-[450px]:text-4xl">Свяжитесь со мной</h2>
        <div className="bg-(--main-background) rounded-2xl border border-(--main-border) grid grid-cols-3 p-3 mt-10 gap-4 max-[450px]:grid-cols-2">
          <ContactCard
            title="Телефон"
            text="+7 (951) 658-02-26"
            icon="fas fa-phone"
            href="tel:+7 (951) 658-02-26"
          />
          <ContactCard
            title="Telegram"
            text="@flup1703"
            icon="fab fa-telegram"
            href="https://t.me/flup1703"
          />
          <ContactCard
            title="Whatsapp"
            text="flup1703"
            icon="fab fa-whatsapp"
            href="https://wa.me/+79516580226"
          />
          <ContactCard
            title="GitHub"
            text="flup1703"
            icon="fab fa-github"
            href="https://github.com/flup1703"
          />
          <ContactCard
            title="Email"
            text="flup1703@gmail.com"
            icon="fas fa-envelope"
            href="mailto:flup1703@gmail.com"
          />
          <ContactCard
            title="Локация"
            text="Санкт-Петербург, Россия"
            icon="fas fa-map-marker-alt"
            type=""
            href=""
          />
        </div>
      </div>
    </section>
  );
}
