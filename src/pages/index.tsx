import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/landing-page/HeroSection";
import TechnologiesSection from "../components/landing-page/TechnologiesSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MOTIV3</title>
        <meta
          name="description"
          content="Financialize your goals with friends."
        />
      </Head>

      <main className="flex-grow h-full">
        <HeroSection />
        <TechnologiesSection />
      </main>
    </>
  );
};

// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
//           {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
//         </div>
//       <a
//         className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };

export default Home;
