import React, {Component} from "react";
import {Icon} from 'react-icons-kit';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import {Calendar} from 'react-icons-kit/fa/calendar';
const perecntToDecimal = (decimal) => {
    return((decimal * 100) + '%')
}
const calcGoalProgress = (total,goal) => {
    return perecntToDecimal(total/goal)
}

const SkiDayCount = ({total, powder, backcountry, goal}) => (
            <div className="ski-day-count">
            <div className="total-days">
            <Calendar />
            <span>{total}</span>
            <span>days</span>
            </div>
            <div className="powder-days">
            <span>{powder}</span>
            <SnowFlake />
            <span>days</span>
            </div>
            
            <div className = "backcountry-days">
            <span>{backcountry}</span>
            <span>days</span>
            <Terrain />
            </div> 
            <div>
            <span>
            {
                calcGoalProgress(
                    total, 
                    goal)
            }
                </span>
            </div>
            </div>
);
export default SkiDayCount;
export const iconHome () => <Icon icon={home /> }