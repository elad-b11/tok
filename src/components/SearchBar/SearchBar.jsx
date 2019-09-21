import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import { debounce } from "lodash";
import LayersAPI from "../../api/layersApi.js";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      results: [],
      value: ""
    };
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.name });

  handleSearchChange = async (e, { value }) => {
    if (value.length < 1) return;

    this.setState({ isLoading: true, value });

    const suggestedLayers = await LayersAPI.getLayersSuggestions(value);

    this.setState({
      isLoading: false,
      results: suggestedLayers.map(layer => layer.name)
    });
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
      />
    );
  }
}

export default SearchBar;
