import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

const Search = () => {
  let [valueSearch, setSearch] = useState("");
  const [auth, setAuth] = useState(useAuth());
  let [resultSearch, setResultSearch] = useState(null);
  let [isOpen, setOpenResult] = useState(false);

  useEffect(() => {
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      let query = params.get("q");
      if (params.get("q")) {
        setSearch(query);
      }
    }
  }, []);

  const setValue = (e) => {
    setSearch(e.target.value || "");
    if (valueSearch && valueSearch?.length > 1) {
      setOpenResult(true);
      axios({
        method: "post",
        url: "/api/getSearch",
        params: { val: valueSearch.toString(), antenna: auth.antenna },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          setResultSearch(response.data);
          setSearch(e.target.value || "");
        })
        .catch(function (response) {});
    } else {
      setOpenResult(false);
    }
  };

  const onClickIfValue = (e) => {
    if (resultSearch?.length > 0) {
      setOpenResult(true);
    }
  };

  if (document.getElementById("input")) {
    var input = document.getElementById("input");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("q", valueSearch);
        let url = window.location.origin + "/patients?" + urlParams;

        window.location.replace(url);
      }
    });
  }

  document.body.addEventListener("click", function (e) {
    setOpenResult(false);
  });

  const redirectionToPatient = (id) => {
    if (id) {
      return (window.location.href = "/patient/" + id + "/information");
    }
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Rechercher un patient"
        id="input"
        className="me-2 uk-input"
        // onBlur={onBlursetValue}
        onClick={(e) => onClickIfValue()}
        aria-label="Search"
        onChange={setValue}
        autoComplete="off"
      />
      {isOpen}
      {resultSearch && isOpen && (
        <div className="result-search">
          <ul>
            {resultSearch?.map((result) => (
              <li
                key={result.id}
                onClick={(e) => redirectionToPatient(result.id)}
                className="link-toPatient"
              >
                <div>
                  {result.lastname} {result.firstname} {result?.nicknames}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Form>
  );
};

export default Search;
