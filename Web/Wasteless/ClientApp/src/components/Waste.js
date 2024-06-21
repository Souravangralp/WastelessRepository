import React, {useState} from 'react';

import 'moment/locale/fi';
import {LocationPicker} from "./LocationPicker";
import {WeekPicker} from "./WeekPicker";
import {Weeks} from "./Weeks";

const Waste = () => {
    
    const [dates, setDates] = useState([]);
    const [locationId, setLocationId] = useState('1');

    function handleLocationChange(location) {
        console.log('location: ', location);
        setLocationId(location);
    }

    function handleWeekChange(date) {
        console.log('location: ', locationId);
        console.log('date: ', date);
        setDates(date);
    }

    return (
        <>
            <div className="d-flex flex-sm-row flex-column">
                <h4>Hävikki</h4>
                <div className="d-flex ms-sm-auto flex-sm-row flex-column gap-2">
                    <WeekPicker onChange={handleWeekChange}/>
                    <div className="mt-sm-0 mt-2">
                        <LocationPicker onChange={handleLocationChange}/>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                {locationId !== undefined ? <Weeks dates={dates} location={locationId}/> : <div>Valitse sijainti</div>}
            </div>
        </>
    );
}

export default Waste;

