import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../src/components/Container";
import Image from "next/image";

import Rodolfo from "../src/assets/rodolfo-vieira-picture.webp";
import { CompaniesBar } from "../src/components/CompaniesBar";
import { Header } from "../src/components/Header";
import { Main } from "../src/components/Main";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Rodolfo Vieira - Portfolio</title>
        <meta
          name="description"
          content="Rodolfo Vieira software developer portfolio home page."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <div style={{ marginBottom: "-88px" }}>
          <Image
            src={Rodolfo}
            alt="Picture of Rodolfo Vieira. An white man with dark brown short hair, smiling and wearing a blue shirt."
            width={480}
            height={599}
            layout="fixed"
          />
        </div>

        <div>
          <h1>{`RODOLFO 
          VIEIRA
          `}</h1>

          <h2>Control & Automation Eng. and Software Developer</h2>
          <p>
            Inspired by tech, I&apos;m eager to make a huge contribution to make
            the world a better place.
          </p>
        </div>
      </Main>
      <CompaniesBar />

      {/* To Do: Add Footer */}
    </Container>
  );
};

export default Home;
