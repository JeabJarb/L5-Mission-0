import style from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <form className={style.searchContainer}>
        <h1 className={style.searchLable}>
        Discover the Latest Global Stock Market Trends and Get the Latest Updates on Global Stock Market Movements HERE!
        </h1>
        <div className={style.searchBox}>
          <input className={style.inputBox} type="text" />
          <button className={style.btn}>SEARCH</button>
        </div>
      </form>
    </>
  );
}
