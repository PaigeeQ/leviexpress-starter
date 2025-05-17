import './style.css';

export const BusStop = ({name, station, time}) => {
    return (
        <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">{name}</div>
        <div className="bus-stop__city">{name}</div>
        <div className="bus-stop__station">{station}</div>
        <div className="bus-stop__time">{time}</div>
      </div>
    );
  };
