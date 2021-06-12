import Include from "../../../../components/Include";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { headVariants } from "../../../../data/variants";
import db from "../../../../data/db";

export default function Section({
  posts,
  itemName,
  section,
  acc = "blue",
  logo = "ri-dashboard-fill",
}) {
  const router = useRouter();
  return (
    <div>
      <Include
        title={`${itemName} - ${section}`}
        desc={`${section} of ${itemName}`}
      />

      <main>
        <div className={`subSideBar ${acc}`}>
          <button>
            <i className={logo}></i>
          </button>
          <div></div>

          <button
            className={`backButton ${acc}Btn`}
            onClick={() => {
              const route = router.asPath;
              const prevRoute = route.substring(0, route.lastIndexOf("/"));
              router.replace(prevRoute);
            }}
          >
            <i className="ri-arrow-go-back-fill"></i>
          </button>
        </div>
        <section className="postSection">
          <motion.div
            variants={headVariants}
            initial="hide"
            animate="show"
            className="postHead"
          >
            <motion.p variants={headVariants}>{itemName}</motion.p>
            <motion.h2 variants={headVariants} className={`${acc}Txt`}>
              {section}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={headVariants}
            initial="hide"
            animate="show"
            className="listPost"
          >
            {posts.map((post) => (
              <motion.div
                key={post.thumbnail + post.title}
                variants={headVariants}
              >
                <Link href={`${router.asPath}/${post.title}`}>
                  <div className="item">
                    <div className="thumbnail">
                      <img src={post.thumbnail} alt="" />
                    </div>
                    <div className="container">
                      <h1>{post.title}</h1>
                      <p>{post.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { name, itemName, section } = context.params;
  const URL = `${db.repo}/main`;

  const mUrl = `${URL}/categories/${name}/${itemName}/${section}/posts.json`;
  const sUrl = `${URL}/categories/${name}.json`;

  const res = await fetch(mUrl);
  const posts = await res.json();

  const sRes = await fetch(sUrl);
  const sData = await sRes.json();

  const sItem = sData.items.find((item) => itemName === item.name);
  const logo = sItem.options.find((item) => item.name === section).logo;

  return {
    props: {
      posts: posts,
      itemName: itemName,
      section: section,
      logo: logo,
      acc: sData.configs.acc,
    },
  };
}

export async function getStaticPaths() {
  const URL = `${db.repo}/main`;
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
      for (let k = 0; k < items[j].options.length; k++) {
        //const sUrl = `${URL}/categories/${names[i]}/${items[j].options[k].name}/posts.json`;

        paths.push({
          params: {
            name: names[i].name.toLowerCase(),
            itemName: items[j].name,
            section: items[j].options[k].name,
          },
        });
      }
    }
  }

  return {
    paths,
    fallback: false,
  };
}
