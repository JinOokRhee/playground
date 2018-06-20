import React from 'react';
import PropTypes  from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';
import { Row, Col, Card, CardHeader, CardBody,Table } from 'reactstrap';
//import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import { NumberWidget, IconWidget } from 'components/Widget';
import Page from 'components/Page';
import { AreaChart, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell,Radar, RadarChart, PolarGrid,
         PolarAngleAxis, PolarRadiusAxis,LabelList,Label,Brush,ReferenceLine,PieChart, Pie, Sector,ResponsiveContainer} from 'recharts';

const tcolors = ["#ed2939", "#ed2939", "#ed2939", "#86888a", "#ed2939", "#ed2939", "#ed2939", "#86888a", "#86888a", "#ed2939"];
const pcolors = ["#86888a", "#86888a", "#86888a", "#ed2939", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a", "#86888a"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

const priceBar = (props) => {
const { fill } = props;
return <path fill={fill}/>;
};
priceBar.propTypes = {
  fill: PropTypes.string,
};

const scolors = ['#ed2939', '#86888a', '#86888a', '#86888a'];



class p3Page extends React.Component  {
  state = {
     product: require('./bar_attribute.json'),
      price: require('./bar_price.json'),
      channel: require('./bar_channel.json')
   };
 async componentDidMount() {
    try {
      const res = await fetch('');
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
    <Page title="3P 전략" breadcrumbs={[{ name: '3P 전략', active: true }]}>
      <Row>
        <Col align="center">
          <Card>
            <CardHeader>
              제품 속성{' '}
              <small className="text-muted text-capitalize">product</small>
            </CardHeader>
            <CardBody>
              <BarChart width={1300} height={300} data={this.state.product}
                                  margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                             <XAxis dataKey="name">

                               </XAxis>
                             <YAxis label={{ value: '해당 제품수 / 전체 제품수 (%)', offset: 18 ,angle:-90, position: 'insideBottomLeft' }}/>
                             <CartesianGrid strokeDasharray="1 1"/>
                             <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar/>}>
                               {
                                  this.state.product.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={tcolors[index % 10]}/>
                                  ))
                                }
                                <LabelList dataKey="count" position="top" />
                             </Bar>
                            </BarChart>
            </CardBody>
          </Card>
        </Col>

      </Row>
      <Row>
        <Col align="center">
          <Card>
            <CardHeader>
              가격{' '}
              <small className="text-muted text-capitalize">price</small>
            </CardHeader>
            <CardBody>
              <BarChart width={1300} height={300} data={this.state.price}
                          margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                     <CartesianGrid strokeDasharray="1 1"/>
                     <XAxis dataKey="name"/>
                     <YAxis label={{ value: '제품 개수 (count)', offset: 18 ,angle:-90, position: 'insideBottomLeft' }}/>
                     <Tooltip/>
                     <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
                     <ReferenceLine y={0} stroke="#ed2939"/>

                     <Brush dataKey='name' height={30} stroke="#ed2939">

                    </Brush>
                     <Bar dataKey="count" fill="#86888a">
                       {
                          this.state.price.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={pcolors[index % 30]}/>
                          ))
                        }
                      </Bar>

                    </BarChart>
            </CardBody>
          </Card>
        </Col>


      </Row>
      <Row>
        <Col align="center">
          <Card>
            <CardHeader>
              유통채널{' '}
              <small className="text-muted text-capitalize">Channel</small>
            </CardHeader>
            <CardBody>
              <BarChart width={500} height={600} data={this.state.channel}
            margin={{top: 0, right: 0, left: 0, bottom: 0}} stackOffset="sign">
       <CartesianGrid strokeDasharray="1 1"/>
       <XAxis dataKey="name" />
       <YAxis label={{ value: '각유통채널/전체 (%)', offset: 18 ,angle:-90, position: 'insideBottomLeft' }}/>
       <Tooltip/>
         <Legend />

       <Bar dataKey="count" fill="#86888a" background={{ fill: '#eee' }} >
         {
            this.state.product.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={scolors[index % 10]}/>
            ))
          }
        </Bar>

      </BarChart>
            </CardBody>

          </Card>
        </Col>


      </Row>
    </Page>

  );
};
}
export default p3Page;
