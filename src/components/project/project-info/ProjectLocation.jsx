import React, { useState, useMemo, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import {
  GoogleMap,
  InfoWindow,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
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
  return <Map latlng={props} />;
}

function Map(props) {
  const varlat = props.latlng.details.Latitude;
  const varLng = props.latlng.details.Longitude;

  const valuename = props.latlng.details.Name;

  //const varlat = "-26.266111";
  //const varLng = "27.865833";

  const markers = [
    {
      id: 1,
      name: valuename,
      lat: props.latlng.details.Latitude,
      lng: props.latlng.details.Longitude,
    },
  ];

  const center = useMemo(() => ({ lat: -26.2041028, lng: 28.0473051 }), []);
  const [selected, setSelected] = useState(null);
  const [location, setLocation] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isEdit, setEdit] = useState(false);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker, lat, lng) => {
    if (marker === activeMarker) {
      return;
    }
    //console.log("lng for markter is :" + lng )
    //let lat1 = "-25.731340"
    //let lng1 = "28.218370";

    let lat1 = props.latlng.details.Latitude;
    let lng1 = props.latlng.details.Longitude;

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
      {isEdit ? (
        <div className="places-container">
          <PlacesAutocomplete setSelected={setSelected} />
        </div>
      ) : (
        <div></div>
      )}

      <GoogleMap
        zoom={16}
        center={{ lat: parseFloat(varlat), lng: parseFloat(varLng) }}
        defaultCenter={{ lat: -26.2041028, lng: 28.0473051 }}
        mapContainerClassName="map-container"
      >
        {markers.map(({ id, name, lat, lng }) => (
          <Marker
            key={id}
            position={{ lat: parseFloat(varlat), lng: parseFloat(varLng) }}
            onClick={() => handleActiveMarker(id, lat, lng)}
          >
            {activeMarker === id ? (
              <InfoWindow
                position={{ lat: parseFloat(varlat), lng: parseFloat(varLng) }}
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
        value={value}
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
