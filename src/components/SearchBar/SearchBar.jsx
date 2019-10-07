import React, { Component } from "react";
import { Search, Label, Segment } from "semantic-ui-react";
import { debounce } from "lodash";
import LayersAPI from "../../api/layersApi.js";

import "semantic-ui-css/semantic.min.css";
import "./SearchBar.scss";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      results: [],
      layerName: "",
      layerId: ""
    };
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ layerName: result.title, layerId: result.layerId });
  };

  handleSearchChange = async (e, { value }) => {
    const trimedValue = value.trim();

    if (trimedValue.length < 1) {
      this.setState({ layerName: value, results: [] });
      return;
    }

    this.setState({ isLoading: true, layerName: value, results: [] });

    const suggestedLayers = await LayersAPI.getLayersSuggestions(trimedValue);

    this.setState({
      isLoading: false,
      results: suggestedLayers.map(layer =>
        Object.assign(
          {},
          {
            title: layer.name,
            creationtime: layer.creationTime,
            description: layer.description,
            image: layer.logo
          }
        )
      )
    });
  };

  resultRenderer = layer => {
    return (
      <div className="horizontal-line">
        <div className="content">
          <div className="title">{layer.title}</div>
          <div className="description">{layer.description}</div>
        </div>
        <div className="image">
          <img src={layer.image} />
        </div>
      </div>
    );
  };

  render() {
    const { isLoading, layerName, results } = this.state;

    return (
      <Search
        className="search-bar"
        input={{ fluid: true }}
        placeholder={"חפש/י שכבה"}
        fluid
        autoFocus
        value={layerName}
        loading={isLoading}
        icon={"search"}
        onResultSelect={this.handleResultSelect}
        onSearchChange={debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        resultRenderer={this.resultRenderer}
        noResultsMessage={"אין תוצאות"}
        results={results}
      />
    );
  }
}

export default SearchBar;
