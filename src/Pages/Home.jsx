import { colors } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

function Home() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    if (!city) {
      alert("Enter city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: iconUrl
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card className="p-4 shadow " style={{ width: '22rem', borderRadius: '1rem'}}>
        <Card.Body>
          <div className="d-flex mb-3 gap-2 align-items-center">
            <Form.Control
              ref={inputRef}
              placeholder="Search by City Name"
              aria-label="Search by City Name"
              className="rounded-pill"
            />
            <Button 
              onClick={() => search(inputRef.current.value)} 
              variant="primary" 
              className="rounded-pill"
              style={{ padding: '0.5rem 1rem' }}
            >
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </Button>
          </div>

          {weatherData && (
            <>
              <div className="text-center my-3">
                <img 
                  src={weatherData.icon} 
                  alt="Weather Icon" 
                  style={{ height: '100px' }} 
                />
              </div>
              <h2 className="text-center mb-0 text-info">{weatherData.temperature}{'\u00b0'}C</h2>
              <p className="text-center text-muted">{weatherData.location}</p>

              <div className="weather-data d-flex justify-content-between align-items-center mt-3">
                <div className="text-center">
                  <img style={{ height: "50px" }} src="https://cdn-icons-png.flaticon.com/512/8691/8691511.png" alt="Humidity" />
                  <p className="text-info">{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
                <div className="text-center">
                  <img style={{ height: "50px" }} src="https://cdn-icons-png.flaticon.com/512/10639/10639258.png" alt="Wind Speed" />
                  <p className="text-info">{weatherData.windSpeed} Km/h</p>
                  <span>Wind-Speed</span>
                </div>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
