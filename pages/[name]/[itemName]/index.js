import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Include from "../../../components/Include";
import { listVariants, headVariants } from "../../../data/variants";
import { motion, AnimatePresence } from "framer-motion";

export default function category({
  logo,
  acc,
  items = [],
  err = false,
  message = "",
}) {
  const router = useRouter();
  const [mState, setMState] = useState(items);
  const [oState, setOState] = useState(mState.length !== 0 ? mState[0] : []);
  const [nav, setNav] = useState(false);

  const doSelect = (name) => {
    const route = router.asPath;
    const prevRoute = route.substring(0, route.lastIndexOf("/"));
    //router.back();
    //router.replace(`${prevRoute}/${name}`);
    router.replace(`${prevRoute}/${name}`, undefined, { shallow: false });
  };

  if (err) {
    return (
      <>
        <Include title="Server Error" />
        <main>
          <div className="errPanel">
            <h1>{message}</h1>
            <p>Check your internet connection or Reload page</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <div>
      <Include title={oState !== undefined ? oState.name : router.query.name} />

      <main>
        <div className={`sideBar ${acc} ${!nav && "sideBar-hide"}`}>
          <button className="navBtn" onClick={() => setNav(!nav)}>
            <i className={nav ? "ri-close-line " : "ri-menu-2-line"}></i>
          </button>
          <motion.i
            initial={{ y: 0, x: "-60%", left: "50%", rotate: "-20deg" }}
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            }}
            className={logo}
          ></motion.i>
          <p className="sideHead">{router.query.name}</p>

          <motion.div
            variants={listVariants}
            initial="hide"
            animate="show"
            className="list"
          >
            {mState.map((item) => (
              <motion.div
                variants={listVariants}
                key={item.name}
                animate={item.selected ? "selected" : "show"}
                className={`item ${item.selected && "active"}`}
                onClick={() => doSelect(item.name)}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <section className="subCategorySection">
          <motion.h1 variants={headVariants} initial={"hide"} animate={"show"}>
            Category
          </motion.h1>
          <motion.div
            variants={headVariants}
            initial={"hide"}
            animate={"show"}
            className="listCategory"
          >
            <AnimatePresence>
              {oState.options.map((item) => (
                <motion.div
                  key={item.name}
                  variants={headVariants}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <Link href={`${router.asPath}/${item.name}`}>
                    <div key={item.name} className={`item ${acc}`}>
                      <i className={`${item.logo} usetxt`}></i>
                      <p>{item.name}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { name, itemName } = context.params;
  const URL = "https://raw.githubusercontent.com/epicX67/md_blogs/main";

  const sUrl = `${URL}/categories/${name}.json`;

  const sRes = await fetch(sUrl);
  const sData = await sRes.json();

  const { logo, acc } = sData.configs;

  const items = sData.items.map((item) => ({
    ...item,
    selected: itemName === item.name ? true : false,
  }));

  return {
    props: {
      itemName: itemName,
      items: items,
      logo: logo,
      acc: acc,
      key: itemName,
    },
  };
}

export async function getStaticPaths() {
  const URL = "https://raw.githubusercontent.com/epicX67/md_blogs/main";
  const mUrl = `${URL}/DB.json`;
  const res = await fetch(mUrl);
  const data = await res.json();

  const names = data.map((item) => item);

  let paths = [];

  for (let i = 0; i < names.length; i++) {
    const cUrl = `${URL}/categories/${names[i].name.toLowerCase()}.json`;
    const cRes = await fetch(cUrl);
    const cData = await cRes.json();

    const items = cData.items.map((item) => item);
    for (let j = 0; j < items.length; j++) {
      paths.push({
        params: {
          name: names[i].name.toLowerCase(),
          itemName: items[j].name,
        },
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}
