import React from "react";
import { TrailersList } from "../components/TrailersList/TrailersList";
import { SearchForm } from "../components/SearchForm/SearchForm";

export default function TrailersPage () {
  return (
    <div>
      <SearchForm />
      <TrailersList />
    </div>
  );
};
