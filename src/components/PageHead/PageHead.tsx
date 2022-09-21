import Head from "next/head";
import { FC } from "react";

interface IPageHead {
  pageTitle: string;
}

export const PageHead: FC<IPageHead> = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
