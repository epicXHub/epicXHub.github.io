import Head from "next/head";
import Link from "next/link";
import Include from "../components/Include";

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
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://raw.githubusercontent.com/epicX67/md_blogs/main/DB.json"
  );
  const data = await res.json();

  return {
    props: {
      items: data,
    },
  };
}
