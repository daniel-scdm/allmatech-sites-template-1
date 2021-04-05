import { loadBingApi, Microsoft } from "src/loader/BingMapLoader";
import { Component, createRef } from "react";
import section from 'src/styles/Section.module.css';

interface IMapProps {
    mapOptions? : any;
}

export default class BingMap extends Component<IMapProps, any> {
    private mapRef = createRef<HTMLDivElement>();
  
    public componentDidMount() {
      loadBingApi().then(() => {
        this.initMap();
      });
    }
  
    public render() {
      return <div ref={this.mapRef} className={section.map} />;
    }
  
    private initMap() {
      const map = new Microsoft.Maps.Map(this.mapRef.current);
      if (this.props.mapOptions) {
        map.setOptions(this.props.mapOptions);
      }
      return map;
    }
  }

