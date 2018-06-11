import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,Cell} from 'recharts';
import { AnnouncementCard, TodosCard } from 'components/Card';

const colors = ['red', 'green', 'orange', 'yellow', 'pink', 'blue', 'black', 'grey',"#A9F5F2","#610B0B"];

class marketPage extends React.Component  {
  state = {
    positioning: require('./positioning_map.json'),
      positioning2: require('./positioning_map2.json')

   };
 async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/bar_skin');
      const product = await res.json();
      this.setState({
        product
      });
    } catch (e) {
      console.log(e);
    }
  }
render() {
  return (
    <Page title="포지셔닝 맵" breadcrumbs={[{ name: '포지셔닝 맵', active: true }]}>

      <Row>
        <Col align="center">
          <Card>
            <CardBody>
              <ScatterChart width={1000} height={600} margin={{top: 0, right: 0, bottom: 0, left: 0}}>
        	<XAxis type="number" dataKey={'x'} />
        	<YAxis type="number" dataKey={'y'} />
          <ZAxis type="number" range={[100, 400]} dataKey={'pname'} name='name'/>
          <CartesianGrid />
        	<Tooltip cursor={{strokeDasharray: '1 1'}}/>
          <Legend />
        	<Scatter data={this.state.positioning} fill='#8884d8'  animationDuration='2000'>
            {
           this.state.positioning.map((entry, index) => {
             return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
           })
         }
         </Scatter>
         <Scatter data={this.state.positioning2} fill='red' shape="star" animationDuration='2000'/>
</ScatterChart>
       </CardBody>
       </Card>
</Col>
      </Row>

    </Page>

  );
};
}
export default marketPage;
