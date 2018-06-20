import React , { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Page from 'components/Page';
import { NumberWidget, IconWidget } from 'components/Widget';
import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';
import './index.css';

const styles = {
  large: {
    fontSize: 100,
    fontWeight: 'bold',
  opacity: 1
  },
  medium: {
    fontSize: 70,
    //fontStyle: 'italic',
    //fontWeight: 'bold'
    opacity: 0.6,
  },
  small: {
    opacity: 0.3,
    fontSize: 40
  }
};

class opinion extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 1000000);
  }

  render() {
    return (


<page>
    <div maxWidth='0.5'>
      <div className='app-outer'>
        <div className='app-inner'>
      <TagCloud
        className='tag-cloud'
        rotate={() => Math.round(Math.random()) * 0}
        style={{
            fontFamily: 'sans-serif',
            //fontSize: () => Math.round(Math.random() * 50) + 16,
            fontSize: 30,
            color: () => randomColor({hue: 'blue'}),
            padding: 2
          }}>
          <div style={styles.large}>지속력</div>
          <div style={styles.large}>커버력</div>
          <div style={styles.large}>표현</div>
          <div style={styles.large}>파운데이션</div>
          <div style={styles.large}>촉촉하다</div>
         <div style={styles.medium}>지속력</div>
         <div style={styles.medium}>커버력</div>
         <div style={styles.medium}>사다</div>
         <div style={styles.medium}>제품</div>
         <div style={styles.medium}>커버</div>
         <div style={styles.medium}>표현</div>
         <div style={styles.medium}>사용</div>
           <div style={styles.medium}>다크닝</div>
           <div style={styles.medium}>추천</div>
           <div style={styles.medium}>사다</div>
           <div style={styles.medium}>기름</div>
           <div style={styles.medium}>밀착</div>
           <div style={styles.medium}>21호</div>
           <div style={styles.medium}>약간</div>
         <div style={styles.small}>예쁘다</div>
         <div style={styles.small}>얇다 </div>
         <div style={styles.small}>정7</div>
         <div style={styles.small}>파운데이션</div>
         <div style={styles.small}>케이스</div>
         <div style={styles.small}>바르기</div>
         <div style={styles.small}>아침</div>
         <div style={styles.small}>개인적</div>
         <div style={styles.small}>사실</div>
         <div style={styles.small}>스틱</div>
         <div style={styles.small}>건조함</div>
         <div style={styles.small}>워낙</div>
         <div style={styles.small}>쿨링감</div>
         <div style={styles.small}>극혐</div>
         <div style={styles.small}>한참</div>
         <div style={styles.small}>자신</div>
         <div style={styles.small}>그리기</div>
         <div style={styles.small}>적용</div>
         <div style={styles.small}>루나</div>
         <div style={styles.small}>무스</div>
         <div style={styles.small}>손등</div>
         <div style={styles.small}>더페</div>
         <div style={styles.small}>13호</div>
         <div style={styles.small}>티존</div>
         <div style={styles.small}>좁쌀</div>
         <div style={styles.small}>선택</div>
         <div style={styles.small}>가성비</div>
           <div style={styles.small}>사기</div>
           <div style={styles.small}>눈밑</div>
           <div style={styles.small}>소량으로</div>
           <div style={styles.small}>미세</div>
           <div style={styles.small}>남자친구</div>
           <div style={styles.small}>아토피</div>
           <div style={styles.small}>오렌지</div>
           <div style={styles.small}>노란기</div>
           <div style={styles.small}>어퓨</div>
           <div style={styles.small}>여태</div>
           <div style={styles.small}>초보양</div>
           <div style={styles.small}>한참</div>
           <div style={styles.small}>전반적</div>
           <div style={styles.small}>정착</div>
           <div style={styles.small}>에뛰드</div>
           <div style={styles.small}>립스틱</div>
           <div style={styles.small}>찾고</div>
           <div style={styles.small}>무너지는중</div>
           <div style={styles.small}>가루날릴</div>
           <div style={styles.small}>핑크끼</div>
           <div style={styles.small}>촉촉한거</div>
           <div style={styles.small}>파우치</div>
           <div style={styles.small}>웨지</div>
           <div style={styles.small}>냄새</div>

     </TagCloud>
     <Table light>
       <thead>
         <tr>
           <th>빈도</th>
           <th>감성점수</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>글자크기+투명도</td>
           <td>색 명도</td>
         </tr>

       </tbody>
     </Table>
   </div>

 </div>

 </div>
</page>



    );
  }
}

export default opinion;
