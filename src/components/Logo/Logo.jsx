import s from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={s.container}>
        {image && <img className={s.img} src={image} alt="logo" />}
        <u>
          <h1
            className={s.title}
            style={{ fontSize: "6em", marginLeft: "210px" }}
          >
            {title}
          </h1>
        </u>
      </div>
      <h2 className={s.subtitle} style={{ fontSize: "1.6em", color: "gold" }}>
        {subtitle}
      </h2>
    </>
  );
}
