import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "../ui/SearchResults";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";

const SearchComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [modalKey, setModalKey] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allVases, setAllVases] = useState([]);

  useEffect(() => {
    const fetchAllVases = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/");
        setAllVases(response.data);
      } catch (error) {
        console.error("Error fetching all vases:", error);
      }
    };

    fetchAllVases();
  }, []);

  useEffect(() => {
    const filteredResults = allVases.filter((vase) => {
      return Object.entries(selectedFilters).every(([key, value]) => {
        return vase[key] === value;
      });
    });

    setSearchResults(filteredResults);
  }, [allVases, selectedFilters]);

  const openModal = (key) => {
    setModalKey(key);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleValueClick = (value) => {
    if (!isValueDisabled(value)) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [modalKey]: value,
      }));
      closeModal();
    }
  };

  const removeFilter = (key) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[key];
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const uniqueValues = [...new Set(allVases.map((vase) => vase[modalKey]))];

  const isValueDisabled = (value) => {
    const filters = { ...selectedFilters, [modalKey]: value };
    const filteredResults = allVases.filter((vase) => {
      return Object.entries(filters).every(([key, filterValue]) => {
        return vase[key] === filterValue;
      });
    });
    return filteredResults.length === 0;
  };

  return (
    <div className=" ">
      <div className="">
        <div className="mb-4  hidden flex-col space-y-5">
          <Button onClick={() => openModal("fabric")}>Fabric</Button>
          <Button onClick={() => openModal("technique")}>Technique</Button>
          <Button onClick={() => openModal("painter")}>Painter</Button>
          <Button onClick={() => openModal("type")}>Type</Button>
          <Button onClick={() => openModal("collection")}>Collection</Button>
          <Button onClick={() => openModal("provenance")}>Provenance</Button>
          <Button onClick={() => openModal("height")}>Height</Button>
          <Button onClick={() => openModal("diameter")}>Diameter</Button>
        </div>

        <div className="flex max-w-xs flex-col space-y-3 ">
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("fabric")}
          >
            Fabric
          </Button>
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("technique")}
          >
            Technique
          </Button>
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("painter")}
          >
            Painter
          </Button>
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("type")}
          >
            Type
          </Button>
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("collection")}
          >
            Collection
          </Button>
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("provenance")}
          >
            Provenance
          </Button>
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("height")}
          >
            Height
          </Button>
          <Button
            className="flex justify-start"
            variant="outline"
            onClick={() => openModal("diameter")}
          >
            Diameter
          </Button>
        </div>

        <div className="">
          {Object.keys(selectedFilters).length > 0 ? (
            <SearchResults results={searchResults} />
          ) : (
            <div>
              <h1 className="font-semibold">
                TRENDALL ART RESEARCH CENTRE POTTERY SEARCH
              </h1>
              <h1>How would you like to search the databases?</h1>
            </div>
          )}
        </div>

        <div>
          {Object.entries(selectedFilters).map(([key, value]) => (
            <span key={key} className="mr-2">
              {key}: {value}{" "}
              <Button onClick={() => removeFilter(key)}>x</Button>
            </span>
          ))}
          {Object.keys(selectedFilters).length > 0 && (
            <Button onClick={clearFilters}>Clear Filters</Button>
          )}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{modalKey}</DialogTitle>
            <DialogDescription>
              Select a value to refine your search.
            </DialogDescription>
          </DialogHeader>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            <ul>
              {uniqueValues.map((value, index) => (
                <DialogTrigger asChild key={index}>
                  <li
                    onClick={() => handleValueClick(value)}
                    style={{
                      color: isValueDisabled(value) ? "red" : "inherit",
                      opacity: isValueDisabled(value) ? 0.5 : 1,
                      cursor: isValueDisabled(value)
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    {value}
                  </li>
                </DialogTrigger>
              ))}
            </ul>
          </div>
          <DialogFooter>
            <Button onClick={closeModal}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchComponent;