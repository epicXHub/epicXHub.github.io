import Link from "next/link";
import Include from "../components/Include";
import db from "../data/db";

export default function Home({ items }) {
  return (
    <div>
      <Include title="Hub" desc="A markdown blog system using NextJS" />
      <main>
        <div target="_blank" className="heading">
          <img src="hub.svg" alt="" />
          <p>A simple hub to serve useful guides about game & tech</p>
        </div>

        <div className="mCategories">
          {items.map((item) => {
            return (
              <Link key={item.name} href={`/${item.name.toLowerCase()}`}>
                <div className={`mCard ${item.acc}`}>
                  <p>{item.name}</p>
                  <i className={item.logo}></i>
                </div>
              </Link>
            );
          })}
        </div>
        <footer>
          <p>
            Made with <span className="redTxt">❤</span> using
          </p>
          <a target="_blank" href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png" />
          </a>
        </footer>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(db.repo_db);
  const data = await res.json();

  return {
    props: {
      items: data,
    },
  };
}
