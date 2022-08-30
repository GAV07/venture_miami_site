import { useState, useRef, useEffect } from 'react';
import { Container } from './container';
import Map, { FullscreenControl, Layer, Source, Popup, Marker } from 'react-map-gl'

//mapboxgl.accessToken = process.env.YOUR_MAPBOX_ACCESS_TOKEN;

const pointLayer = {
  id: 'point',
  type: 'circle',
  'source-layer': 'City_of_Miami_Neighborhoods',
  paint: {
    'circle-radius': 5,
    'circle-color': '#3F47FF',
    'circle-stroke-color': "#FED766",
    'circle-stroke-width': 1
  }
}

const labelLayer = {
  id: 'label',
  type: 'symbol',
  'source-layer': 'City_of_Miami_Neighborhoods',
  layout: {
    "text-field": ['get', 'place_name'],
    "text-size": 12,
    "text-offset": [0, -1.5],
  },
  paint: {
    "text-color": "#3F47FF",
  },
}

export function CityMap() {

    return (
      <Container className="flex mb-20 w-screen h-[500px] justify-center">
        <div className="bg-vm-blue text-white w-screen md:text-black md:bg-white md:p-12 md:pb-24 md:rounded-md md:w-full h-full max-w-4xl max-h-2xl">
          <Map
            className="w-full h-full" 
            initialViewState={{
              latitude: 25.76,
              longitude: -80.19,
              zoom: 10,
            }}
            minZoom={10}
            maxZoom={13}
            mapStyle="mapbox://styles/vm-admin/cl7apf5m4000m15q7vsjidoh3"
            mapboxAccessToken="pk.eyJ1Ijoidm0tYWRtaW4iLCJhIjoiY2w3YWllZHNrMDI2bDNvcWY1Z3R3anN4aSJ9.k7TctfADAafa3DJsZoAJXg"
          >
            <FullscreenControl position="bottom-right" />
            <Source type="vector" url='mapbox://vm-admin.cl7aptdmb0vuq20rqpdfo3pim-1ej7f'>
              <Layer {...pointLayer}/>
              <Layer {...labelLayer}/>
            </Source>
          </Map>
        </div>
      </Container>
    )
  }