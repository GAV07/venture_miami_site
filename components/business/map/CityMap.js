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


export default function CityMap(props) {

    const [poiData, setPoiData] = useState(props.content.mapboxData); // original poi data

    const [pointOfInterests, setPointOfInterests] = useState([]); // original Points of interest

    const [popupInfo, setPopupInfo] = useState(null);

    const [mapStyle, setMapStyle] = useState("mapbox://styles/elouis12/clm43ie7h024j01macn0e70ah"); // for toggling between 2d and 3d map style
    // const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/traffic-day-v2"); // for toggling between 2d and 3d map style

    const mapRef = useRef(null);

    const [lng, setLng] = useState(-80.19);
    const [lat, setLat] = useState(25.76);
    const [zoom, setZoom] = useState(10);


    const [isShowing, setIsShowing] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsShowing(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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

                let copyItem = poiItem;

                // if the property is true then set it to false
                if (copyItem.firstRender) {
                    copyItem.firstRender = false
                }

                // update it to either true or false for the selection
                if (poi === copyItem.type) {
                    return {...copyItem, selected: true};
                }

                // if not a match
                return {...copyItem, selected: false} // make first render false and set the selected false

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

    // shows all the pois back on the map
    function resetPOI() {

        setPointOfInterests((prevClickedPointOfInterests) => {

            let prevPOIs = prevClickedPointOfInterests.map((poi) => {

                return {...poi, firstRender: true, selected: false}
            });


            return prevPOIs;
        })

    }


    return (

        <div className={"w-full m-auto pt-20"}>

            {/* CONTENT */}
            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.content.mapHero.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.mapHero.subtitle}
                    </p>
                </div>


                {/* MAP CONTAINER */}
                <div className={"w-full h-full h-[450px] flex justify-between items-center gap-x-20"}>

                    {/* MAP */}
                    <div className={"relative h-full w-full basis-[100%] xl:basis-[70%] rounded-[8px]"}>

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

                        {/* MOBILE POI */}
                        <div
                            ref={dropdownRef}
                            className={"xl:hidden absolute top-0 right-0 mt-[10px] mr-[10px] z-50 w-[250px] bg-[#f5f5f5] ring-2 ring-black/10  flex flex-col rounded-[8px] max-h-[400px]"}>

                            <button
                                className={`flex justify-center items-center bg-white py-[8px] ${isShowing ? 'rounded-t-[8px]' : 'rounded-[8px]'} hover:bg-[#f2f2f2]`}
                                onClick={() => {
                                    setIsShowing(!isShowing)
                                }}
                            >
                                <p className={`text-[15px] font-medium w-full text-[#333333] rounded-t-[8px] font-[700]`}>Point
                                    of interests</p>
                                {/*<span className="text-xs text-white">{isShowing ? '▲' : '▼'}</span>*/}
                            </button>

                            <div
                                className={`${isShowing ? 'flex flex-col overflow-y-scroll' : 'hidden'} rounded-b-[8px]`}>

                                <button
                                    className={`px-[20px] flex items-center py-[10px] border-solid border-t-[1px] border-black/10 hover:bg-[#f2f2f2]`}

                                    onClick={() => {
                                        resetPOI()
                                        setIsShowing(!isShowing)
                                    }}
                                >
                                    <div
                                        className={"mr-[16px] rounded-full p-2 ring-2 ring-white w-[27px] h-[27px] flex justify-center items-center"}>
                                        <GrPowerReset size={15} color={"white"}/>
                                    </div>
                                    <div className={""}>
                                        <p className={"mr-[8px] text-left text-[13px] text-[#333] font-medium"}>Show
                                            all</p>
                                    </div>
                                </button>

                                {
                                    pointOfInterests.map((poi, index) => {

                                        return (

                                            <button
                                                key={index}
                                                className={`px-[20px] flex items-center ${poi.selected && 'bg-black/10'} py-[10px] border-solid border-t-[1px] border-black/10 hover:bg-[#f2f2f2]`}

                                                onClick={() => {
                                                    handlePOIClick(poi.type)
                                                    setIsShowing(!isShowing)
                                                }}
                                            >
                                                <div className={"mr-[16px]"}><Pin type={poi.type.toLowerCase()}
                                                                                  place={""}/>
                                                </div>
                                                <div className={""}>
                                                    <p className={"mr-[8px] text-left text-[13px] text-[#333] font-medium"}>{poi.type}</p>
                                                    {/*<p className={"mr-[8px] text-left text-[11px] text-[#8b96aa] text-[13px] mt-[2px] font-light"}>all
                                                            sports miami has to offer</p>*/}
                                                </div>
                                            </button>
                                        )
                                    })
                                }

                            </div>
                        </div>

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

                                            <div
                                                key={index}
                                                className={"w-300px"}
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
                                    <div
                                        className={"w-full h-full my-auto shadow-md shadow-slate-200 rounded-[10px] flex flex-col overflow-hidden"}>
                                        {/*<div className={"w-full h-[100px]"}>
                                                <img
                                                    src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                                    alt=""
                                                    className="rounded-t-[10px] object-cover"
                                                />
                                            </div>*/}

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

                    {/* DESKTOP POI */}
                    <div
                        className={"hidden xl:block relative basis-[30%] rounded-[8px] ring-[1px] ring-black rounded-[8px] bg-[#f5f5f5] overflow-hidden"}>

                        <div
                            className={`flex justify-center items-center bg-black text-white py-[8px]`}

                        >
                            <p className={`text-[15px] font-medium w-full rounded-t-[8px] font-[700] text-center`}>Point
                                of interests</p>
                            {/*<span className="text-xs text-white">{isShowing ? '▲' : '▼'}</span>*/}
                        </div>

                        <div
                            className={`flex flex-col overflow-y-scroll rounded-b-[8px]`}>

                            <button
                                className={`px-[20px] flex items-center py-[10px] border-t-[1px] border-black hover:bg-[#f2f2f2]`}

                                onClick={() => {
                                    resetPOI()
                                    setIsShowing(!isShowing)
                                }}
                            >
                                <div
                                    className={"mr-[16px] rounded-full p-2 ring-2 ring-white w-[27px] h-[27px] flex justify-center items-center"}>
                                    <GrPowerReset size={15} color={"white"}/>
                                </div>
                                <div className={""}>
                                    <p className={"mr-[8px] text-left text-[13px] text-[#333] font-medium"}>Show
                                        all</p>
                                </div>
                            </button>

                            {
                                pointOfInterests.map((poi, index) => {

                                    return (

                                        <button
                                            key={index}
                                            className={`px-[20px] flex items-center ${poi.selected && 'bg-black/10'} py-[10px] border-t-[1px] border-black/10 hover:bg-[#f2f2f2]`}

                                            onClick={() => {
                                                handlePOIClick(poi.type)
                                                setIsShowing(!isShowing)
                                            }}
                                        >
                                            <div className={"mr-[16px]"}><Pin type={poi.type.toLowerCase()}
                                                                              place={""}/>
                                            </div>
                                            <div className={""}>
                                                <p className={"mr-[8px] text-left text-[13px] text-[#333] font-medium"}>{poi.type}</p>
                                                {/*<p className={"mr-[8px] text-left text-[11px] text-[#8b96aa] text-[13px] mt-[2px] font-light"}>all
                                                            sports miami has to offer</p>*/}
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

    )
}