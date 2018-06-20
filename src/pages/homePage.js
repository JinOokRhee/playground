import React from 'react';
import { getColor } from 'utils/colors';
import AnimationCount from 'react-count-animation';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardGroup,
  CardDeck,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from 'reactstrap';

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdPersonPin,
  MdRateReview,
  MdThumbUp,
  MdShare,
} from 'react-icons/lib/md';

import InfiniteCalendar from 'react-infinite-calendar';

import { Bar } from 'react-chartjs-2';

import {
  supportTicketsData,
  productsData,
  userProgressTableData,
  avatarsData,
  todosData,
  chartjs,
} from 'demos/dashboardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';

import SupportTicket from 'components/SupportTicket';
import ProductMedia from 'components/ProductMedia';
import UserProgressTable from 'components/UserProgressTable';

import { AnnouncementCard, TodosCard } from 'components/Card';

import { NumberWidget, IconWidget } from 'components/Widget';

import MapWithBubbles from 'components/MapWithBubbles';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import { AreaChart, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Cell,Radar, RadarChart, PolarGrid,
         PolarAngleAxis, PolarRadiusAxis,LabelList,Label,Brush,ReferenceLine,PieChart, Pie, Sector,ResponsiveContainer} from 'recharts';


const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);




const settings = {
  start: 0,
  count: 1029,
  duration: 7000,
  decimals: 0,
  useGroup: true,
  animation: 'up'
};



class homePage extends React.Component {
  state = {
    sentdash: require('./sentdash.json'),
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

  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    return (

  <Page>
    <Row>
      <Col >
        <NumberWidget
          title="긍정점수"
          subtitle="This month"
          number="9,800"
          color="primary"
          progress={{
            value: 75,
            label: 'Last month',
          }}
        />
      </Col>

      <Col >
        <NumberWidget
          title="부정점수"
          subtitle="This month"
          number="5,400"
          color="secondary"
          progress={{
            value: 25,
            label: 'Last month',
          }}
        />
      </Col>

    </Row>

        <Row>
          <Col align="center">
            <Card>
              <CardBody>
              <img src="http://d9vmi5fxk1gsw.cloudfront.net/home/glowmee/upload/20170619/1497861377626.png" width="300"/>
                <h2>잉크래스팅 파운데이션 슬림핏 SPF30 PA++</h2>
                  <div>
                  <h3>Total Review</h3>
                  </div>
                    <div>
          <h1>
            <AnimationCount {...settings}/>
            </h1>
            </div>
         </CardBody>
         </Card>
  </Col>
        </Row>
        <Row>
          <Col>
            <Card align="center">
              <CardHeader>
                Sentimental Graph{' '}
                <small className="text-muted text-capitalize">June</small>
              </CardHeader>
              <CardBody>

          <LineChart width={1300} height={400} data={this.state.sentdash} syncId="anyId"
                margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <CartesianGrid strokeDasharray="1 1"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
              <Legend />
            <Line type='monotone' dataKey='sentscore' stroke='#FE2E2E' fill='#FE2E2E' />
          </LineChart>
          <AreaChart width={1300} height={400} data={this.state.sentdash} syncId="anyId"
                margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <CartesianGrid strokeDasharray="1 1"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
              <Legend />
            <Area type='monotone' dataKey='sentscore' stroke='#81BEF7' fill='#81BEF7' />
          </AreaChart>
              </CardBody>
            </Card>
          </Col>

        </Row>







</Page>
    );
  }
}
export default homePage;
