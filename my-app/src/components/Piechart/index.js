
import {PieChart, Pie, Legend, Tooltip} from 'recharts'

import {Container, Heading} from './styledComponents'

const Piechart = props => {
    const {data=[],head} = props 
    let adict = {}
    for (let i of data){
        if (adict[i]){
            adict[i]+=1
        }else{
            adict[i]=1
        }
    }
    console.log(adict)

    let alist = []

    for (let i in Object.keys(adict)){
        alist.unshift({"label": Object.keys(adict)[i],"value": Object.values(adict)[i]})
    }

    console.log("alist",alist)

  return (
    <Container>
      <Heading>{head}</Heading>
      <PieChart width={1250} height={1050}>
      <Pie data={alist} dataKey="value" nameKey="label" cx="50%" cy="50%" outerRadius={300} fill="#8884d8" label />
      <Tooltip />
      </PieChart>
    </Container>
  )
}

export default Piechart