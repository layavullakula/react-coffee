import React,{Component} from 'react';
import * as d3 from 'd3';

class Chartd3 extends Component{
    constructor(props){
        super(props)
        this.myref= React.createRef();
    }
    render(){
        const {data, w,h,color} = this.props;
        const accessToRef = d3.select(this.myref.current)
        .append('svg')
        .attr("width", w)
        .attr("height",h)
        .style("background-color","#1c1c2b")
        .style("padding", 10);

        accessToRef.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d)=> d)
        .attr("x",(d,i)=> i*70)
        .attr("y", (d,i) => h-10*d)
        .attr("width",65)
        .attr("height",(d,i)=>d*10)
        .attr("fill","white");

        accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .text((d)=> d)
        .attr("x",(d,i)=> i*70)
        .attr("y", (d,i) => h-10*d)
        .attr("width",65)
        .attr("height",(d,i)=>d*10)
        .attr("fill",color);

        return(
            <div ref={this.myref}></div>
        )
    }
}
{
    

}

export default Chartd3;