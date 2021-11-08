import {Component} from 'react'
import React from 'react';
import { Heading } from '../Piechart/styledComponents';

import Chartd3 from '../Chartd3';
import Piechart from '../Piechart';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            intensity : [],
            Likelihood: [],
            Relevance: [],
            eYear: [],
            Country: [],
            Topics: [],
            Region: [],
            pestle: [],
            sector: [],
            source: [],
            sYear: [],
        }
    }

  componentDidMount(){
    this.getData()
  }

  getData = async() =>{
    const response = await fetch('http://localhost:3001/given');
    const data = await response.json();
    console.log("data",data)
    const newData = data.map((eachItem)=>({
        pestle: eachItem.pestle,
        sector: eachItem.sector,
        source: eachItem.source,
        sYear:eachItem.start_year,
        Intensity: eachItem.intensity,
        Likelihood: eachItem.likelihood,
        Relevance: eachItem.relevance,
        eYear: eachItem.end_year,
        Country: eachItem.country,
        Topics: eachItem.topic,
        Region: eachItem.region,
    }))
    const pestleData = newData.map((eachItem)=>(eachItem.pestle))
    const sectorData = newData.map((eachItem)=>(eachItem.sector))
    const sourceData = newData.map((eachItem)=>(eachItem.source))
    const sYearData = newData.map((eachItem)=>(eachItem.sYear))
    const intensityData = newData.map((eachItem)=>(eachItem.Intensity))
    const likelihoodData = newData.map((eachItem)=>(eachItem.Likelihood))
    const relevanceData = newData.map((eachItem)=>(eachItem.Relevance))
    const yearData = newData.map((eachItem)=>(eachItem.eYear))
    const countryData = newData.map((eachItem)=>(eachItem.Country))
    const topicData = newData.map((eachItem)=>(eachItem.Topics))
    const regionData = newData.map((eachItem)=>(eachItem.Region))

    this.setState({
        pestle: pestleData.filter((eachItem)=>(eachItem!=="")),
        sector: sectorData.filter((eachItem)=>(eachItem!=="")),
        source: sourceData.filter((eachItem)=>(eachItem!=="")),
        sYear:  sYearData.filter((eachItem)=>(eachItem!=="")),
        intensity: intensityData.filter((eachItem)=>(eachItem!=="")),
        Likelihood: likelihoodData.filter((eachItem)=>(eachItem!=="")),
        Relevance: relevanceData.filter((eachItem)=>(eachItem!=="")),
        Year: yearData.filter((eachItem)=>(eachItem!=="")),
        Country:countryData.filter((eachItem)=>(eachItem!=="")),
        Topics: topicData.filter((eachItem)=>(eachItem!=="")),
        Region: regionData.filter((eachItem)=>(eachItem!==""))})
  }

  render(){
      const {intensity,
        Likelihood,
        Relevance,
        Year,
        Country,
        Topics,
        Region,pestle,
        sector,
        source,
        sYear} = this.state
      // console.log('render:',Year)
  return (
    <div style={{"background": 'black',paddingTop: "60px",paddingBottom: "60px"}}>
      <Heading>Data Visualization Dashboard</Heading>
      <div style={{color: 'white',"background":"#1c1c2b",margin:"20px", borderRadius:"10px"}}>
        <Heading>Likelihood</Heading>
      <Chartd3 id="likelihood" data={Likelihood} h={250} w={1250} color={"yellow"} />
      </div>
        <div style={{color: 'white',"background":"#1c1c2b",margin:"20px", borderRadius:"10px"}}>
          <Heading>Relevance</Heading>
      <Chartd3 id="relevance" data={Relevance} h={250} w={1250} color={"green"} />
      </div>
      <div style={{color: 'white',"background":"#1c1c2b",margin:"20px", borderRadius:"10px"}}>
        <Heading>Intensity</Heading>
      <Chartd3 id="intensity" data={intensity} h={250} w={1250} color={"blue"} />
      </div>
      <Piechart head="Start Year" data={sYear} />
      <Piechart head="End Year" data={Year} />
      <Piechart head="Country" data={Country} />
      <Piechart head="Topics" data={Topics} />
      <Piechart head="Region" data={Region} />
      <Piechart head="Pestle" data={pestle} />
      <Piechart head="Source" data={source} />
      <Piechart head="Sector" data={sector} />
      
    </div>
  );
}
}
// <Chart data={Country} h={400} w={500} color={"orange"} />
// <Chart data={Topics} h={400} w={500} color={"violet"} />
// <Chart data={Region} h={400} w={500} color={"indigo"} />
export default Dashboard;
