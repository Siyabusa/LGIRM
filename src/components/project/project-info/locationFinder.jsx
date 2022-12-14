import React, { useState, useMemo, useContext } from "react";
import TextField from '@mui/material/TextField';
import { GoogleMap,InfoWindow, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import Geocode from "react-geocode";
import "@reach/combobox/styles.css";
import "./locationFinder.css";
import { multistepcontext } from '../../../StepContext';


export default function Places(props) {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map lat={props.lat} longi = {props.longi}/>;
}

function Map(props) {

  const flat = props.lat;
  const flongi = props.longi;

  const markers = [
    {
      id: 1,
      lat: props.lat,
      lng: props.longi
    },
  ];

  const { locationData, setLocationData } = useContext(multistepcontext);
  const center = useMemo(() => ({ lat: -26.2041028, lng: 28.0473051 }), []);
  const [selected, setSelected] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);


  const handleActiveMarker = (marker, lat, lng) => {
    if (marker === activeMarker) {
      return;
    }

    Geocode.fromLatLng(markers[0].lat, markers[0].lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log("The ADDRESS: " + address);
        setSelectedAddress(address);
      },
      (error) => {
        console.error(error);
      }
    );
    setActiveMarker(marker);
  };

 

  

  

  
  return (
    <>
      <div className="places-container">
      
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={12}
        center={{lat:parseFloat(flat), lng:parseFloat(flongi) }}
        defaultCenter={{ lat: -26.2041028, lng: 28.0473051 }}
        mapContainerClassName="map-container"
      >
         {markers.map(({ id, lat, lng }) => (
          <Marker
            key={id}
            position={{ lat: parseFloat(flat), lng: parseFloat(flongi) }}
            onClick={() => handleActiveMarker(id, lat, lng)}
          >
            {activeMarker === id ? (
              <InfoWindow
                position={{ lat: parseFloat(flat), lng: parseFloat(flongi) }}
                onCloseClick={() => setActiveMarker(null)}
              >
                <div>
                  <h3>{selectedAddress}</h3>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {locationData, setLocationData } = useContext(multistepcontext);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    setLocationData({...locationData, "latlng" : lat + " " + lng});
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={
          value
        }
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
