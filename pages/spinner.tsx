import { NextPage } from "next";
import React from "react";
import { PageWrapper } from "../src/components/Layout/PageWrapper";
import { SpinnerWrapper } from "../src/components/Spinner/SpinnerWrapper";

const Spinner: NextPage = () => {
  return (
    <PageWrapper>
      <SpinnerWrapper />
    </PageWrapper>
  );
};

export default Spinner;
