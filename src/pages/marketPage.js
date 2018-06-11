import React from 'react';
import PropTypes  from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';
import { Row, Col, Card, CardHeader, CardBody,Table } from 'reactstrap';
//import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import Page from 'components/Page';
import { AreaChart, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell,Radar, RadarChart, PolarGrid,
         PolarAngleAxis, PolarRadiusAxis,LabelList,Label,Brush,ReferenceLine,PieChart, Pie, Sector,ResponsiveContainer} from 'recharts';

         const scolors = ['#ed2939', '#00C49F', '#FFBB28', '#FF8042','#404040','#6f7080'];
         const RADIAN = Math.PI / 180;
         const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          	const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
           const x  = cx + radius * Math.cos(-midAngle * RADIAN);
           const y = cy  + radius * Math.sin(-midAngle * RADIAN);

           return (
             <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
             	{`${(percent * 100).toFixed(0)}%`}
             </text>
           );
         };

const acolors = ['#404040', '#404040', '#ed2939', '#404040', '#404040', '#404040'];


         class marketPage extends React.Component  {
           state = {
             age: require('./bar_age.json'),
               skin: require('./bar_skin.json'),
               ourskin: require('./ourproductskin.json')
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
             <Page title="시장 세분화" breadcrumbs={[{ name: '시장 세분화', active: true }]}>

               <Row>
                 <Col align="center">
                   <Card>
                     <CardHeader>
                       피부타입 분포{' '}
                       <small className="text-muted text-capitalize">skin_type</small>
                     </CardHeader>
                     <CardBody>
                       <PieChart width={1300} height={600}>
                   <Pie isAnimationActive={false} data={this.state.skin} cx={300} cy={300} innerRadius={100} outerRadius={180} fill="#8884d8" label={renderCustomizedLabel}>
                      <LabelList dataKey="name" />
                      <Label value="전체 제품" offset={100} position="center" />
                        {
                     	this.state.skin.map((entry, index) => <Cell fill={scolors[index % scolors.length]}/>)
                     }
                      </Pie>
                   <Pie data={this.state.ourskin} cx={1000} cy={300} innerRadius={150} outerRadius={250} fill="#82ca9d" label={renderCustomizedLabel}>
                     <LabelList dataKey="name" />
                     <Label value="선택된 제품" offset={100} position="center" />
                       {
                     	this.state.skin.map((entry, index) => <Cell fill={scolors[index % scolors.length]}/>)
                     }
                     </Pie>
                   <Tooltip/>
                  </PieChart>
                     </CardBody>
                   </Card>
                 </Col>


               </Row>
               <Row>
                 <Col align="center">
                   <Card>
                     <CardHeader>
                       연령 분포{' '}
                       <small className="text-muted text-capitalize">age</small>
                     </CardHeader>
                     <CardBody>
                       <PieChart width={800} height={650}>
                   <Pie isAnimationActive={false} data={this.state.age} cx={370} cy={350} innerRadius={150} outerRadius={250} fill="#8884d8" label={renderCustomizedLabel}>
                      <LabelList dataKey="name" />
                      <Label value="전체 제품" offset={100} position="center" />
                        {
                     	this.state.age.map((entry, index) => <Cell fill={acolors[index % acolors.length]}/>)
                     }
                      </Pie>

                   <Tooltip/>
                  </PieChart>
                     </CardBody>
                   </Card>
                 </Col>
                 <Col>

                   <Card body>
                     <Table dark>
                       <thead>
                         <tr>
                           <th>#</th>
                           <th>age</th>
                           <th>count</th>
                           <th>percentage</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <th scope="row">1</th>
                           <td>23~27세</td>
                           <td>62302</td>
                           <td>44%</td>
                         </tr>
                         <tr>
                           <th scope="row">2</th>
                           <td>18~22세</td>
                           <td>43249</td>
                           <td>31%</td>
                         </tr>
                         <tr>
                           <th scope="row">3</th>
                           <td>28~32세</td>
                           <td>16785</td>
                           <td>12%</td>
                         </tr>
                         <tr>
                           <th scope="row">4</th>
                           <td>17세 이하</td>
                           <td>10949</td>
                           <td>8%</td>
                         </tr>
                         <tr>
                           <th scope="row">5</th>
                           <td>33~37세</td>
                           <td>5443</td>
                           <td>4%</td>
                         </tr>
                         <tr>
                           <th scope="row">6</th>
                           <td>38세 이상</td>
                           <td>2256</td>
                           <td>2%</td>
                         </tr>
                          <tr>
                           <th scope="row">Selected product Avg</th>
                           <td>23세</td>
                           <td></td>
                           <td></td>
                         </tr>
                       </tbody>
                     </Table>
                   </Card>
                 </Col>

               </Row>
             </Page>

           );
         };
         }
         export default marketPage;
