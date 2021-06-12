import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { listVariants, headVariants } from "../../data/variants";
import Include from "../../components/Include";
import db from "../../data/db";

export default function category({
  configs,
  items,
  err = false,
  message = "",
}) {
  const router = useRouter();
  const [mState, setMState] = useState(items);
  const [oState, setOState] = useState(
    mState[0] !== null ? mState[0] : undefined
  );

  const [nav, setNav] = useState(false);

  const doSelect = (name) => {
    // Updating Selection list
    const nState = mState.map((item) => ({
      ...item,
      selected: item.name === name ? true : false,
    }));
    setMState(nState);

    // Updating catagory list
    const onState = nState.filter((item) => item.name === name);
    setOState(onState[0]);
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
        <div className={`sideBar ${configs.acc} ${!nav && "sideBar-hide"}`}>
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
            className={configs.logo}
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
              {oState !== undefined &&
                oState.options.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={headVariants}
                    initial="hide"
                    animate="show"
                    exit="hide"
                  >
                    <Link href={`${router.asPath}/${oState.name}/${item.name}`}>
                      <div key={item.name} className={`item ${configs.acc}`}>
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
  const url = `${db.repo}/main/categories/${context.params.name}.json`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    let cItems = data.items.map((item) => ({ ...item, selected: false }));

    if (cItems.length > 0) {
      cItems[0].selected = true;
    }

    return {
      props: { configs: data.configs, items: cItems },
    };
  } catch (err) {
    return {
      props: { err: true, message: err.message },
    };
  }
}

export async function getStaticPaths() {
  const url = db.repo_db;
  const res = await fetch(url);
  const data = await res.json();

  const names = data.map((item) => item.name.toLowerCase());
  const paths = names.map((name) => ({
    params: {
      name: name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
