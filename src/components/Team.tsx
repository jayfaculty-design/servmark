"use client";

import React from "react";
import SectionHeader from "./Heading";

const Team = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#fefefe] to-primary/10">
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader
          title="Meet The Team"
          subtitle="Our diverse team of experts brings years of hands-on experience in
          their respective fields. Each member plays a crucial role in
          delivering exceptional service and building lasting relationships with
          our clients."
        />
      </div>
    </section>
  );
};

export default Team;
