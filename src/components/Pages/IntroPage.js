import React, { useState } from 'react';
import style from '../Style/IntroPage.module.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../img/back1.png'
import img2 from '../img/back2.png'
import img3 from '../img/back3.png'
import img4 from '../img/back4.png'
import img5 from '../img/back5.png'
import img6 from '../img/back6.png'

const images =[
  img1,img2,img3,img4,img5,img6
]
const texts = [
  <p className={style.commonText}>전국대학연합,<br/> 기획/컨설팅 동아리<br/> 
  <span className={style.Title}>Phalanx</span> <br/> 
  <span className={style.Weak1}>널 위해, 준비했어.</span></p>,
  
  <p className={style.commonText}>기획...? <br/> 
  <span className={style.SemiAlert}>그게... 뭐야?</span></p>,
  
  <p className={style.commonText}>에이 바보들...<br/> 
  왜 이걸 이렇게 하냐? <br/> 
  이렇게 하면 <br/> 
  <span className={style.SemiAlert}>더 괜찮을 것 같은데?</span></p>,
  
  <p className={style.commonText}>어? 이거를 이렇게 바꾸면<br/> 
  <span className={style.SemiAlert}>더 좋을 거 같은데? </span> <br/> 
  <span className={style.Weak2}>여기에는 빨간색 보다, 파랑색이 더 이쁘지!..</span></p>,
  
  <p className={style.commonText}>
    <span className={style.SemiAlert}>여기는 더 강하게 해줘야지! </span><br/> 
  <span className={style.Weak2}>여기는 넘 차가운데?.. <br/> 
  따뜻한 감성으로 가야지!</span></p>,
  
  <p className={style.commonText}>여태껏 너가 해온 
  <span className={style.StrongSemi}>‘기획’</span> 이 <br/> 이런 것이라면,  
  미안하지만... <br/>이건 그냥 그대의  <br/>
  <span className={style.Alert}>‘상상’</span> 이고, <br/> 
  <span className={style.Alert}>‘취향’</span> 입니다. </p>,

  <p className={style.commonText}>이런거 할거면, <br/>우리 동아리 오시면 안돼요ㅠ <br/> 
  예술 동아리 가시면 됩니다.<br/> 
  <span className={style.Weak2}>개인 취향ㄴㄴ.... </span></p> ,

  <p className={style.commonText}>
    <span className={style.StrongSemi}>제가 팔랑크스<br/>
     동아리를  하면서 배운 것은, </span><br/> 
  <span className={style.StrongNormal}>기획이라는 것은, 사실 </span> <br/>
  그 <span className={style.StrongBold}>‘방법과 단계’</span> 
  가<br/>  있다는 것입니다.</p>,

  <p className={style.commonText}>많은 회사들이 이를 가르치고자<br/>  
  <span className={style.SemiAlert}>많은 비용을 들여가며 </span>
  <br/> 신입사원 1~2년을 교육하기 때문에, </p>,

  <p className={style.commonText}>이것이 
  <span className={style.StrongSemi}>있는 자</span>와 
  <span className={style.SemiAlert}>없는 자</span>는 <br/> 
  우리의 채용/커리어 시장에서<br/>  
  절대적 ‘갑’ 이 될 수 있는 <br/> 
  가장 파워풀한 스펙과 강점이 되는 지점입니다.</p>,

  <p className={style.commonText}>그래서 만약 당신이<br/>  
  <span className={style.Alert}>‘기획’ 의 천재라면,</span></p>,

  <p className={style.commonText}>그래서 기획의 방법 따윈 <br/> 
  <span className={style.Alert}>개나 줘버리라고 한다면…</span></p>,

  <p className={style.commonText}>저희 동아리 오셔서 할 거 없어요…</p>,

  <p className={style.commonText}>저희 보다 재미있게 놀고,<br/>  
  술 마시고 하는 동아리 많으니, <br/> 그런 곳을 추천드려요..</p>,

  <p className={style.commonText}>저희는 진짜 
  <span className={style.StrongSemi}>기획자로 커서,</span><br/>  
  기획 직무에 취업을 하고 <br/> 컨설팅 기업에 몸담고자 하는 <br/> 
  대학생과 청춘의 클럽입니다. <br/> 
  <span className={style.Weak2}>(노는 곳 아니에요..)</span></p>,
  
  <p className={style.commonText}>웬만하면 들어오지 마세요 <br/> 
  <span className={style.Weak2}>(이러다 다 죽어!!!)</span></p>,

  <p className={style.commonText}>돌아가세요!!<br/>  
  <span className={style.Weak2}>‘뒤로’ 클릭!</span></p>,

  <p className={style.commonText}>나가주세요.<br/> 
   <span className={style.Weak2}>혼자 있고 싶어요</span></p>,

  <p className={style.commonText}>
    <span className={style.Weak2}>...여기까지 오다니..대단하다.. </span><br/> 
  그냥 호기심에 온 분들은 다 도망갔겠죠..?</p>,

  <p className={style.commonText}>그러면..☺</p>,

  <p className={style.commonText}>기획의 니즈를 파악하는 단계 <br/> 
  기획의 구조를 설계하는 단계 <br/> 기획의 내용을 심화하는 단계<br/>
   기획의 대상에게 제안하는 단계</p>,

  <p className={style.commonText}>각 단계를 1주에 1개씩 밟아,<br/>  
  동아리 졸업까지 총 7개의 기획안을 <br/> 
  실제 기업에게 던지는 과정!</p>,

  <p className={style.commonText}>내가 기획해서,<br/>  
  그것을 내가 가고 싶은 기업에게<br/>  직접 제안 할거에요.<br/>
  이것을 이길 수 있는 경력과 스펙은 없는데,<br/> 
  혼자 하긴 힘들다보니, <br/>
  우리 클럽에서 진행합니다. ☺</p>,

  <p className={style.commonText}>따라.. 올 수 있지?</p>,

  <p className={style.commonText}>“이봐 자네.. 이번 기획 한번 맡아보지 않겠나?”</p>,

  <p className={style.commonText}>기획/컨설팅 분야 최고의 동아리</p>,

  <p className={style.commonText}>전국대학연합, 클럽 팔랑크스에 <br/>
   오신 것을 환영합니다.</p>,
];
const IntroPage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isImageOnRight, setIsImageOnRight] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleClick = () => {
    if (textIndex === texts.length - 1) {
      navigate('/DiscriptPage');
    } else {
      setTextIndex(textIndex + 1);
      setIsImageLoaded(false); // 새로운 이미지 로딩 전에 초기화
      setIsImageOnRight(!isImageOnRight);
    }
  };



  return (
    <div className={style.container} onClick={handleClick}>
      <div className={style.Box}>
        {texts[textIndex]}
      </div>
      <div className={style.imageDiv} style={{ right: isImageOnRight ? '50%' : '0%'}}>
        <img
          className={style.IntroImage}
          alt="IntroImage_Phalanx"
          src={images[textIndex]}
          onLoad={handleImageLoad}
          style={{ opacity: isImageLoaded ? 0.85 : 0 }}
        />
      </div>
      <div className={style.ClickBox}><p className={style.Click}>Click!</p></div>
    </div>
  );
};

export default IntroPage;