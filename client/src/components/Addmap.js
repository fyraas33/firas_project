import React, { useState } from 'react'
import { Map, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { marker } from 'leaflet'



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const Addmap = ({ annonce, setAnnonce }) => {


  const [state, setState] = useState({ x: 0, zoom: 7, marker: ({ lat: 33.457103164901056, lng: 9.025008521737607 }) })


  const addMarker = (e) => {
    setState({
      x: 1,
      zoom: 17,
      marker: e.latlng
    })
    setAnnonce({ ...annonce, localisationMap: { lat: e.latlng.lat, lng: e.latlng.lng } })
  }

  return (
    <div>

      <Map center={[34, 10]} zoom={7} ZoomControl={false} onClick={addMarker}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position={"bottomright"}>

        </ZoomControl>
        {state.x > 0 && (<Marker position={state.marker}>
        </Marker>)}
      </Map>
    </div>
  )
}


export default Addmap