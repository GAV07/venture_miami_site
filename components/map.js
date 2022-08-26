import { useState, useRef, useEffect } from 'react';
import { Container } from './container';
import Map, { Layer, Source } from 'react-map-gl'

//mapboxgl.accessToken = process.env.YOUR_MAPBOX_ACCESS_TOKEN;

const layerStyle = {
  id: 'point',
  type: 'circle',
  'source-layer': 'City_of_Miami_Neighborhoods',
  paint: {
    'circle-radius': 5,
    'circle-color': '#3F47FF'
  }
}

export function CityMap() {

    return (
      <Container className="flex mb-20 w-screen h-[500px] justify-center">
        <div className="bg-white p-12 pb-20 rounded-md w-full h-full max-w-4xl max-h-2xl">
          <Map
            className="w-full h-full" 
            initialViewState={{
              latitude: 25.76,
              longitude: -80.19,
              zoom: 10
            }}
            mapStyle="mapbox://styles/vm-admin/cl7apf5m4000m15q7vsjidoh3"
            mapboxAccessToken="pk.eyJ1Ijoidm0tYWRtaW4iLCJhIjoiY2w3YWllZHNrMDI2bDNvcWY1Z3R3anN4aSJ9.k7TctfADAafa3DJsZoAJXg"
          >
              <Source type="vector" url='mapbox://vm-admin.cl7aptdmb0vuq20rqpdfo3pim-1ej7f'>
                <Layer {...layerStyle}/>
              </Source>
            </Map>
          </div>
      </Container>
    )
  }