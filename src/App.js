import { useState } from "react";
import logo from ".//background.jpg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const getdata = (cityName) => {
    if (!cityName) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b22ef5760eab6eff9f0f86a5899b2bf4`
      )
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleClick = () => {
    getdata(location);
  };
  var date = new Date();
  var current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  console.log(current_date);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8rem",
        }}
      >
        <img
          style={{
            position: "relative",
            height: "25rem",
            borderRadius: "8px",
          }}
          src={logo}
          alt=""
        />
        <input
          type="search"
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          style={{
            position: "absolute",
            background: "transparent",
            borderColor: "white",
            marginTop: "-20rem",
            marginLeft: "-3rem",
            borderRadius: "5px",
            color: "white",
            width: "10rem",
          }}
        />
        <button
          style={{
            position: "absolute",
            background: "transparent",
            borderColor: "white",
            marginTop: "-20rem",
            marginLeft: "10rem",
            borderRadius: "5px",
            color: "white",
          }}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        {Object.keys(data).length > 0 && (
          <>
            <h1
              style={{
                position: "absolute",
                color: "white",
                marginTop: "-13rem",
                marginLeft: "0rem",
                fontFamily: "sans-serif",
                fontSize: "2rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="25"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>

              {data?.name}
            </h1>
            <p
              style={{
                position: "absolute",
                color: "white",
                marginTop: "-10rem",
                marginLeft: "0rem",
                fontFamily: "monospace",
                fontSize: "10px",
              }}
            >
              {data?.sys?.country},{current_date}
            </p>

            <h1
              style={{
                position: "absolute",
                color: "white",
                marginTop: "19rem",
                marginRight: "8.5rem",
                textAlign: "start",
              }}
            >
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h1>
            {data?.weather?.map((index) => {
              return (
                <>
                  <svg
                    style={{
                      position: "absolute",
                      color: "white",
                      marginTop: "18rem",
                      marginLeft: "13rem",
                      textAlign: "start",
                      fontSize: "1rem",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-brightness-alt-high"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z" />
                  </svg>
                  <h1
                    style={{
                      position: "absolute",
                      color: "white",
                      marginTop: "20rem",
                      marginLeft: "13rem",
                      textAlign: "start",
                      fontSize: "1rem",
                    }}
                  >
                    {index.main}
                  </h1>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default App;
