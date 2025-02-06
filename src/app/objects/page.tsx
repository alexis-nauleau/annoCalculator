"use client"; // Important pour Next.js et React

import React, { useState } from "react";
import Filter from "../components/Filter";




const ObjectPage = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Filter onFilterChange={setFilter} />

    </div>
  );
};

export default ObjectPage;
