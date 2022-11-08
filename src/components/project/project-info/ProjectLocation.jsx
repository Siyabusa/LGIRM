import React, { useState, useMemo, useContext, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
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
import "@reach/combobox/styles.css";
import "./locationFinder.css";


export default function Places(props) {


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map latlng = {props}/>;
}

function Map(props) {
  const lat = props.latlng.details.Latitude;
  const lng = props.latlng.details.Longitude;
  console.log(lat + lng);
  const center = useMemo(() => ({ lat: -26.2041028, lng: 28.0473051 }), []);
  const [selected, setSelected] = useState(null);
  const [location, setLocation] = useState("");
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    
    setSelected({lat, lng });
    
  },[]);

  
  return (
    <>
      {isEdit ? <div className="places-container">
      
        <PlacesAutocomplete setSelected={setSelected} />
      </div> : <div></div>}

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={{lat, lng }} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
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