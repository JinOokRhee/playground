import React from 'react';
import PropTypes  from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
//import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import { NumberWidget, IconWidget } from 'components/Widget';
import Page from 'components/Page';
import { AreaChart, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell,Radar, RadarChart, PolarGrid,
         PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = require('./aaa.json');
const todos =[]
const tcolors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
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

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};



class p3Page extends React.Component  {

 async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/bar_skin');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
render() {
  return (
    <Page title="3P 전략" breadcrumbs={[{ name: '3P 전략', active: true }]}>
      <Row>
        <Col xl={100} lg={12} md={12} align="center">
          <BarChart width={100} height={300} data={todos}
                    margin={{top: 0, right: 0, left: 0, bottom: 0}}>
               <XAxis dataKey="skin_type"/>
               <YAxis/>
               <CartesianGrid strokeDasharray="1 1"/>
               <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}>
                 {
                    data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={tcolors[index % 10]}/>
                    ))
                  }
               </Bar>
              </BarChart>
        </Col>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Monthly Visitors"
            subtitle="This month"
            number="5,400"
            color="secondary"
            progress={{
              value: 45,
              label: 'Last month',
            }}
          />
        </Col>

      </Row>
    </Page>

  );
};
}
export default p3Page;
