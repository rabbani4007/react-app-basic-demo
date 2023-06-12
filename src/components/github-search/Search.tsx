import React from "react";
import axios from "axios";

import ListRepositories from "./list-repositories";
import SearchForm from "./search-form";
import { GitHubRepository, GitHubSearchResultType } from "../../types/GitHub";

const Search = () => {
  const [repositories, setRepositories] =
    React.useState<Array<GitHubRepository>>();

  // Performs the search
  async function search(query: string) {
    const result = await axios.get<GitHubSearchResultType>(
      `https://api.github.com/search/repositories?q=${query}`
    );
    setRepositories(result.data.items);
  }

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchForm search={search} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ListRepositories repositories={repositories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
