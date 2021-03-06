import React from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = process.env.API_KEY;

const MapStyles = styled.div`
  height: 100%;
  width: 100%;
`;


class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lat: 45.5122,
      lng: -122.6587,
      zoom: 11
    };
  }

  componentDidMount(){
    const { lat, lng, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render(){
    const { lng, lat, zoom } = this.state;

    return(
      <div>
        <MapStyles ref={el => this.mapContainer = el}  />
      </div>
    );
  }
}

export default Map;