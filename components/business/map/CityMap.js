import {useState, useRef, useEffect, Fragment} from 'react';
import Map, {
    FullscreenControl,
    Layer,
    MapRef,
    Source,
    Popup,
    Marker,
    GeolocateControl,
    NavigationControl, ScaleControl
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import Pin from "./Pin";
import * as React from "react";
import {GrPowerReset} from "react-icons/gr";
import {miamiGeoJSON} from "./miamiGeoJSON";

//mapboxgl.accessToken = process.env.YOUR_MAPBOX_ACCESS_TOKEN;


export function CityMap(props) {

    const [poiData, setPoiData] = useState(props.content); // original poi data

    const [pointOfInterests, setPointOfInterests] = useState([]); // original Points of interest

    const [popupInfo, setPopupInfo] = useState(null);

    const [mapStyle, setMapStyle] = useState("mapbox://styles/elouis12/clm43ie7h024j01macn0e70ah"); // for toggling between 2d and 3d map style
    // const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/traffic-day-v2"); // for toggling between 2d and 3d map style

    const mapRef = useRef(null);

    const [lng, setLng] = useState(-80.19);
    const [lat, setLat] = useState(25.76);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {

        // sorts data by type, then place
        const sortedData = [...poiData].sort((a, b) => {

            if (a.fields.Type < b.fields.Type) {
                return -1;
            }
            if (a.fields.Type > b.fields.Type) {
                return 1;
            }
            if (a.fields.Place < b.fields.Place) {
                return -1;
            }
            if (a.fields.Place > b.fields.Place) {
                return 1;
            }
            return 0;
        });

        setPoiData(sortedData);

        // to add the badges to the screen
        let set = new Set();
        const updatedPointOfInterests = [];

        sortedData.forEach((poi) => {
            if (!set.has(poi.fields.Type)) {
                set.add(poi.fields.Type);

                updatedPointOfInterests.push({
                    type: poi.fields.Type,
                    place: poi.fields.Place,
                    selected: false,
                    firstRender: true,
                    lat: poi.fields.Lat,
                    lon: poi.fields.Lon,
                    address: poi.fields.Address,
                    description: poi.fields.Description,
                    url: poi.fields.Url,
                }); // Add to the updated array
            }
        });

        setPointOfInterests(updatedPointOfInterests); // Update the state array
    }, []);


    const enable2D = () => {


        if (mapRef.current) {
            mapRef.current?.flyTo({
                duration: 1000,
                essential: true,
                pitch: 0
            });
        }

        setMapStyle("mapbox://styles/elouis12/clm43ie7h024j01macn0e70ah");


    }

    const enable3D = () => {


        if (mapRef.current) {
            mapRef.current?.flyTo({
                duration: 1000,
                essential: true,
                pitch: 60
            });
        }

        setMapStyle("mapbox://styles/elouis12/clm43krfa028n01qidktg9evm");


    }


    function resetPositionAndZoom() {

        mapRef.current?.flyTo({
            center: [-80.19, 25.76],
            bearing: 0,
            zoom: 10,
            duration: 1000,
            essential: true,
        });
    }

    function handlePOIClick(poi) {

        setPointOfInterests((prevClickedPointOfInterests) => {

            const updatedPointOfInterests = prevClickedPointOfInterests.map((poiItem) => {

                // update it to either true or false for the selection
                if (poi === poiItem.type) {
                    return {...poiItem, selected: !poiItem.selected};
                }
                return poiItem.firstRender ?
                    {...poiItem, firstRender: false} :  // make first render false
                    poiItem;
            });

            // check if all selected values were false
            const allSelectedFalse = updatedPointOfInterests.every(poiItem => !poiItem.selected);

            if (allSelectedFalse) {

                return updatedPointOfInterests.map((poiItem) => {

                    return {...poiItem, firstRender: true}
                })
            }

            return updatedPointOfInterests;
        });
    }

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"bg-[#15181b] pt-[140px] pb-[70px] px-[40px]"}>

                {/* CONTENT */}
                <div className={"max-w-[1200px] mx-auto text-center"}>
                    <h1 className="text-[36px] md:text-[36px] font-bold text-[white] mb-[16px]">
                        Miami has a lot to offer
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#9ba2b2] leading-8">
                        Whether you're looking for ....
                    </p>

                    <div className={"w-full min-h-[450px] mt-[56px] flex flex-col lg:flex-row"}>

                        <div className={"relative w-[787px] rounded-[8px] mr-[23px]"}>

                            {/* RESET POSITION AND ZOOM CONTROL */}
                            <div
                                className="absolute mt-[200px] ml-[10px] z-50 rounded-md flex flex-col justify-center items-center ring-2 ring-black/10 divide-y divide-black/10">

                                <button
                                    className={`relative bg-white rounded-md  w-[29px] h-[29px] flex justify-center items-center p-[10px] hover:bg-[#f2f2f2]`}
                                    onClick={resetPositionAndZoom}
                                    title={"Reset map positioning and zoom"}
                                >
                                    <p className={"font-black"}>
                                        <GrPowerReset size={20} color={"#333333"}/>
                                    </p>
                                </button>
                            </
                            div>


                            {/*2D and 3D controls */}
                            {/*                          <div
                              className="absolute mt-[250px] ml-[10px] z-50 rounded-md flex flex-col justify-center items-center ring-2 ring-black/10 divide-y divide-black/10">

                              <button
                                  className={`relative bg-white rounded-t-md w-[29px] h-[29px] flex justify-center items-center p-[10px] hover:bg-[#f2f2f2]`}
                                  onClick={enable2D}
                                  title={"Enable 2D"}
                              >
                                  <p className={"text-md font-semibold text-[#333333]"}>2D</p>
                              </button>

                              <button
                                  className={`relative bg-white rounded-b-md  w-[29px] h-[29px] flex justify-center items-center p-[10px] hover:bg-[#f2f2f2]`}
                                  onClick={enable3D}
                                  title={"Enable 3D"}
                              >
                                  <p className={"text-md font-semibold text-[#333333]"}>3D</p>
                              </button>

                          </div>*/}
                            <Map
                                ref={mapRef}
                                initialViewState={{
                                    latitude: lat,
                                    longitude: lng,
                                    zoom: zoom,
                                    bearing: 0,
                                    pitch: 0
                                }}
                                minZoom={7}
                                maxZoom={20}
                                mapStyle={mapStyle}
                                style={{width: '100%', height: '100%', borderRadius: 8}}
                                mapboxAccessToken="pk.eyJ1IjoiZWxvdWlzMTIiLCJhIjoiY2xtMHQ0M3BlMnZtajNkbGl6eXpjaW5zNSJ9.awO9MyYI1GFs-GrSN27nqg"
                            >
                                <GeolocateControl position="top-left"/>
                                <FullscreenControl position="top-left"/>
                                <NavigationControl position="top-left" showCompass={true} visualizePitch={false}
                                                   showZoom={true}/>
                                <ScaleControl/>

                                {

                                    pointOfInterests.map((poi, index) => {

                                        {
                                            return (poi.selected || poi.firstRender) && (

                                                /* MARKERS */
                                                <div
                                                    key={index}
                                                    className={"w-300px bg-red-200"}
                                                    onMouseEnter={(e) => {

                                                        e.stopPropagation();
                                                        setPopupInfo({
                                                            place: poi.place,
                                                            lat: poi.lat,
                                                            lon: poi.lon,
                                                            address: poi.address,
                                                            description: poi.description,
                                                            url: poi.url,
                                                        });
                                                    }}
                                                    /*onMouseLeave={() => {

                                                        setPopupInfo(null);
                                                    }}*/

                                                    onClick={(e) => {


                                                        mapRef.current.flyTo({
                                                            center: [poi.lon, poi.lat],
                                                            zoom: 17,
                                                            duration: 1000,
                                                            essential: true
                                                        });
                                                        setPopupInfo({
                                                            place: poi.place,
                                                            lat: poi.lat,
                                                            lon: poi.lon,
                                                            address: poi.address,
                                                            description: poi.description,
                                                            url: poi.url,
                                                        });

                                                    }}
                                                >
                                                    <Marker
                                                        key={`marker-${index}`}
                                                        longitude={poi.lon}
                                                        latitude={poi.lat}
                                                        anchor={"bottom"}

                                                    >
                                                        <Pin type={poi.type.toLowerCase()} place={poi.place}/>
                                                    </Marker>

                                                </div>


                                            )
                                        }

                                    })

                                }

                                {
                                    popupInfo &&
                                    <Popup
                                        anchor="top"
                                        longitude={popupInfo.lon}
                                        latitude={popupInfo.lat}
                                        onClose={() => setPopupInfo(null)}
                                        style={{borderRadius: '8px'}}
                                        maxWidth={'500px'}
                                    >
                                        {/*<div className={"w-[95%] mx-auto h-[95%] my-auto shadow-md shadow-slate-200 rounded-[10px] h-full flex flex-col"}>*/}
                                        <div
                                            className={"w-full h-full my-auto shadow-md shadow-slate-200 rounded-[10px] flex flex-col overflow-hidden"}>
                                            {<div className={"w-full h-[100px]"}>
                                                <img
                                                    src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                                    alt=""
                                                    className="rounded-t-[10px] object-cover"
                                                />
                                            </div>}

                                            <div
                                                className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[80%] rounded-b-[10px] space-y-[8px]"}>
                                                <a href={popupInfo.url}
                                                   className={"self-start text-[16px] font-bold text-[#007AFC]"}>{popupInfo.place}</a>
                                                <p className={"text-[13px] text-center font-medium text-[#0e1012]"}>{popupInfo.description}</p>
                                                <p className={"text-[10px] text-center text-[#566171]"}>{popupInfo.address}</p>
                                            </div>
                                        </div>
                                    </Popup>

                                }
                                <Source
                                    id="miami-boundary"
                                    type="geojson"
                                    data={miamiGeoJSON}
                                >
                                    <Layer
                                        id="miami-boundary-layer"
                                        type="line"
                                        source="miami-boundary"
                                        paint={{
                                            'line-color': '#515762',
                                            'line-width': 1,
                                        }}
                                    />
                                </Source>
                            </Map>
                        </div>

                        <div
                            className={"relative w-[390px] bg-[#22262e] border-[1px] border-[#515762] flex flex-col rounded-[8px] max-h-[450px] overflow-y-scroll"}>

                            <div className={"sticky top-0 left-0 bg-[#2b303c] py-[8px] rounded-tl-[8px]"}>
                                <p className={"text-[15px] font-medium w-full text-white"}>Point of interests</p>
                            </div>

                            <div className={"flex flex-col"}>
                                {
                                    pointOfInterests.map((poi) => {

                                        return (

                                            <button
                                                className={`px-[20px] flex items-center hover:bg-[#2b303c] ${poi.selected && 'bg-[#2b303c]'} py-[10px]`}
                                                className={`px-[20px] flex items-center ${poi.selected && 'bg-[#2b303c]'} py-[10px]`}

                                                onClick={() => {
                                                    handlePOIClick(poi.type)
                                                }}
                                            >
                                                <div className={"mr-[16px]"}><Pin type={poi.type.toLowerCase()}
                                                                                  place={""}/>
                                                </div>
                                                <div className={""}>
                                                    <p className={"mr-[8px] text-left text-[13px] text-white font-medium"}>{poi.type}</p>
                                                    <p className={"mr-[8px] text-left text-[11px] text-[#8b96aa] text-[13px] mt-[2px] font-light"}>all
                                                        sports miami has to offer</p>
                                                </div>
                                            </button>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}