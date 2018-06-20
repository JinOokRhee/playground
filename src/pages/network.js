import React , { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Page from 'components/Page';
import { NumberWidget, IconWidget } from 'components/Widget';
import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';
import './index.css';
import { Graph } from 'react-d3-graph';

const data = {
    nodes: [{ id: '좋다' }, { id: '늘다' }, { id: '쓰다' }, { id: '피부' }, { id: '바르다' }, { id: '보다' }, { id: '커버력' }, { id: '너무' }, { id: '촉촉하다' },
    { id: '쿠션' }, { id: '제품' }, { id: '파운데이션' }, { id: '진짜' }, { id: '커버' }, { id: '사용' }, { id: '느낌' }, { id: '지속력' }, { id: '사다' },
    { id: '괜찮다' }, { id: '얼굴' }],
    links: [{source: '좋다', target: '쿠션'},
 {source: '늘다', target: '쿠션'},
 {source: '쓰다', target: '쿠션'},
 {source: '피부', target: '쿠션'},
 {source: '바르다', target: '쿠션'},
 {source: '보다', target: '쿠션'},
 {source: '커버력', target: '쿠션'},
 {source: '너무', target: '쿠션'},
 {source: '촉촉하다', target: '쿠션'},
 {source: '쿠션', target: '얼굴'},
 {source: '쿠션', target: '제품'},
 {source: '쿠션', target: '느낌'},
 {source: '쿠션', target: '괜찮다'},
 {source: '쿠션', target: '사다'},
 {source: '쿠션', target: '사용'},
 {source: '쿠션', target: '지속력'},
 {source: '쿠션', target: '커버'},
 {source: '쿠션', target: '진짜'},
 {source: '쿠션', target: '파운데이션'}]


};
const myConfig = {
    nodeHighlightBehavior: true,
    height: 1000,
    width: 1000,
    padding: 200,
    node: {
        color: 'lightblue',
        size: 200,
        highlightStrokeColor: 'red',
        fontSize: 14,
        highlightFontSize: 14,
    },
    link: {
        highlightColor: 'lightblue'
    }
};

const onClickNode = function(nodeId) {
    window.alert('Clicked node ${nodeId}');
};


const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};


class network extends Component {
  render() {
    return (

      <Graph
          id="graph-id"
          data={data}
          config={myConfig}

      />




    );
  }
}

export default network;
