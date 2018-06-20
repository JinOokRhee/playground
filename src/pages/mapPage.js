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
          <ZAxis type="number" range={[200, 4000]} dataKey={'pname'} name='name'/>
          <CartesianGrid />
        	<Tooltip cursor={{strokeDasharray: '1 1'}}/>

        	<Scatter data={this.state.positioning} fill='#8884d8'  animationDuration='2000'>
            {
           this.state.positioning.map((entry, index) => {
             return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
           })
         }
         </Scatter>
         <Scatter data={this.state.positioning2} fill='red' shape="star" animationDuration='2000'/>
</ScatterChart>
<Table light>
  <thead>
    <tr>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">고객이 느끼는 제품별 실제 속성을 파악하여 이를 한 눈에 알아보고자 포지셔닝맵을 그리고자 하였다.
이를 위해, 고객의 리뷰 약 30만개를 텍스트 마이닝 분석 기법 중 word2vec을 이용하여 1058개의 속성을 뽑아내었다.
이후, 이를 PCA(주성분분석)을 해서 전체의 약 82%를 설명할 수 있는 2개의 차원으로 축소하여 개별 제품을 의미하는 점을 표시하여 그래프를 그렸다.</th>
    </tr>
  </tbody>
</Table>

       </CardBody>
       </Card>
</Col>
      </Row>

    </Page>

  );
};
}
export default marketPage;
