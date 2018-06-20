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
    nodes: [{id: '좋다'},
 {id: '늘다'},
 {id: '쓰다'},
 {id: '피부'},
 {id: '바르다'},
 {id: '보다'},
 {id: '커버력'},
 {id: '너무'},
 {id: '촉촉하다'},
 {id: '쿠션'},
 {id: '제품'},
 {id: '파운데이션'},
 {id: '진짜'},
 {id: '커버'},
 {id: '사용'},
 {id: '느낌'},
 {id: '지속력'},
 {id: '사다'},
 {id: '괜찮다'},
 {id: '얼굴'},
 {id: '화장'},
 {id: '그렇다'},
 {id: '정말'},
 {id: '그냥'},
 {id: '밝다'},
 {id: '색상'},
 {id: '맞다'},
 {id: '표현'},
 {id: '예쁘다'},
 {id: '쓸다'},
 {id: '건성'},
 {id: '많이'},
 {id: '생각'},
 {id: '발라'},
 {id: '가격'},
 {id: '시간'},
 {id: '수정'},
 {id: '모공'},
 {id: '색'},
 {id: '처음'},
 {id: '매트'},
 {id: '짱'},
 {id: '베이스'},
 {id: '얇다'},
 {id: '퍼프'},
 {id: '추천'},
 {id: '구매'},
 {id: '많다'},
 {id: '딱'},
 {id: '조금'},
 {id: '나오다'},
 {id: '지성'},
 {id: '건조하다'},
 {id: '엄청'},
 {id: '이쁘다'},
 {id: '21호'},
 {id: '약간'},
 {id: '살짝'},
 {id: '다크닝'},
 {id: '컨실러'},
 {id: '기름'},
 {id: '각질'},
 {id: '보고'},
 {id: '발리'},
 {id: '자연'},
 {id: '톤'},
 {id: '처럼'},
 {id: '인생'},
 {id: '밀착력'},
 {id: '템'},
 {id: '보이다'},
 {id: '발리다'},
 {id: '파우더'},
 {id: '부각'},
 {id: '건조'},
 {id: '올라오다'},
 {id: '마무리'},
 {id: '완전'},
 {id: '섞다'},
 {id: '기초'},
 {id: '밀착'},
 {id: '여드름'},
 {id: '만족'},
 {id: '지속'},
 {id: '거의'},
 {id: '컬러'},
 {id: '해주다'},
 {id: '핑크'},
 {id: '브러쉬'},
 {id: '제일'},
 {id: '노랗다'},
 {id: '아주'},
 {id: '적당하다'},
 {id: '더블'},
 {id: '세미'},
 {id: '스팅'},
 {id: '정착'},
 {id: '에뛰드'},
 {id: '백화점'},
 {id: '로드샵'}]
,
    links: [{source: '좋다', target: '백화점'},
 {source: '늘다', target: '백화점'},
 {source: '쓰다', target: '적당하다'},
 {source: '피부', target: '백화점'},
 {source: '바르다', target: '백화점'},
 {source: '보다', target: '적당하다'},
 {source: '커버력', target: '쿠션'},
 {source: '너무', target: '백화점'},
 {source: '촉촉하다', target: '백화점'},
 {source: '쿠션', target: '마무리'},
 {source: '쿠션', target: '제일'},
 {source: '쿠션', target: '에뛰드'},
 {source: '쿠션', target: '완전'},
 {source: '쿠션', target: '더블'},
 {source: '쿠션', target: '템'},
 {source: '쿠션', target: '발리다'},
 {source: '쿠션', target: '발리'},
 {source: '제품', target: '여드름'},
 {source: '파운데이션', target: '적당하다'},
 {source: '진짜', target: '컬러'},
 {source: '커버', target: '백화점'},
 {source: '사용', target: '정착'},
 {source: '느낌', target: '에뛰드'},
 {source: '지속력', target: '제일'},
 {source: '사다', target: '백화점'},
 {source: '괜찮다', target: '정착'},
 {source: '얼굴', target: '백화점'},
 {source: '화장', target: '적당하다'},
 {source: '그렇다', target: '백화점'},
 {source: '정말', target: '적당하다'},
 {source: '그냥', target: '백화점'},
 {source: '밝다', target: '에뛰드'},
 {source: '색상', target: '정착'},
 {source: '맞다', target: '제일'},
 {source: '표현', target: '정착'},
 {source: '예쁘다', target: '이쁘다'},
 {source: '쓸다', target: '적당하다'},
 {source: '건성', target: '정착'},
 {source: '많이', target: '백화점'},
 {source: '생각', target: '올라오다'},
 {source: '발라', target: '에뛰드'},
 {source: '가격', target: '스팅'},
 {source: '시간', target: '적당하다'},
 {source: '수정', target: '컬러'},
 {source: '모공', target: '핑크'},
 {source: '색', target: '에뛰드'},
 {source: '처음', target: '컬러'},
 {source: '매트', target: '백화점'},
 {source: '짱', target: '세미'},
 {source: '베이스', target: '백화점'},
 {source: '얇다', target: '정착'},
 {source: '퍼프', target: '이쁘다'},
 {source: '추천', target: '정착'},
 {source: '구매', target: '백화점'},
 {source: '많다', target: '브러쉬'},
 {source: '딱', target: '에뛰드'},
 {source: '조금', target: '정착'},
 {source: '나오다', target: '백화점'},
 {source: '지성', target: '에뛰드'},
 {source: '건조하다', target: '제일'},
 {source: '엄청', target: '브러쉬'},
 {source: '이쁘다', target: '적당하다'},
 {source: '이쁘다', target: '컨실러'},
 {source: '이쁘다', target: '거의'},
 {source: '이쁘다', target: '건조'},
 {source: '이쁘다', target: '밀착력'},
 {source: '21호', target: '백화점'},
 {source: '약간', target: '제일'},
 {source: '살짝', target: '정착'},
 {source: '다크닝', target: '에뛰드'},
 {source: '기름', target: '백화점'},
 {source: '각질', target: '컬러'},
 {source: '각질', target: '제일'},
 {source: '각질', target: '밀착'},
 {source: '보고', target: '에뛰드'},
 {source: '자연', target: '기초'},
 {source: '톤', target: '마무리'},
 {source: '처럼', target: '거의'},
 {source: '인생', target: '제일'},
 {source: '인생', target: '보이다'},
 {source: '파우더', target: '핑크'},
 {source: '부각', target: '에뛰드'},
 {source: '올라오다', target: '아주'},
 {source: '마무리', target: '여드름'},
 {source: '섞다', target: '백화점'},
 {source: '기초', target: '여드름'},
 {source: '여드름', target: '로드샵'},
 {source: '만족', target: '정착'},
 {source: '지속', target: '제일'},
 {source: '해주다', target: '적당하다'},
 {source: '핑크', target: '정착'},
 {source: '브러쉬', target: '정착'},
 {source: '브러쉬', target: '에뛰드'},
 {source: '제일', target: '아주'},
 {source: '노랗다', target: '백화점'},
 {source: '적당하다', target: '백화점'},
 {source: '적당하다', target: '스팅'},
 {source: '세미', target: '에뛰드'},
 {source: '에뛰드', target: '백화점'}]
};

const myConfig = {
    nodeHighlightBehavior: true,
    height: 1000,
    width: 1200,
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
