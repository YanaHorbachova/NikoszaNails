import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import s from './Contacts.module.css'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 51.127240888061074,
  lng: 17.049626253172505
};

function MyComponent() {
  return (
      <div className={s.map}>
        <LoadScript
        googleMapsApiKey="AIzaSyBGC5H-OtfqmSzfoZGjEDCZfBqjTRG7mSo"
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}>

            <Marker 
            position={center}
            animation='BOUNCE'
            />
        </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default React.memo(MyComponent)

/* AIzaSyBGC5H-OtfqmSzfoZGjEDCZfBqjTRG7mSo
51.127240888061074, 17.049626253172505 */