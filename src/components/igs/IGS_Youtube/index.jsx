import React, {useState} from 'react'
import {
    YoutubeContainer,
    YoutubeWrapper,
    YoutubeRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    ImgWrap2,
    Img,
    Content, Speaker, IGS_YoutubeH1, Speakerbio, IGS_hr
} from './YoutubeElements'
import {Button} from "../IGS_ButtonElements";
import {ServicesCard} from "../../Services/ServiceElements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../../Hero/HeroElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  './styles.css'


import YouTube from 'react-youtube';
import {IGS_ServicesH1} from "../IGS_Services/IGS_ServiceElements";
import Icon1 from "../../../images/elon.jpg";
import {ServicesIcon} from "../Speaker/ServiceElements";
import {YoutubeOne,YoutubeTwo, YoutubeThree, YoutubeFour} from "./Data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Youtube = () => {
    const [hover, setHover] = useState(false);
   

    const onHover = () => {
        setHover(!hover)
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const opts2 = {
        height: '250',
        width: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      return (

        <YoutubeContainer lightBg='true' id='sessions'>
            <IGS_YoutubeH1>Sessions</IGS_YoutubeH1>
            <IGS_hr/>
<Carousel responsive={responsive}
swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ true }
  focusOnSelect={true}
  className="pak "
  sliderClass='slid'
  autoPlaySpeed={4000}
  centerMode={false}
  keyBoardControl={true}
  customTransition="transform 500ms ease-in-out"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-80-px"
  renderDotsOutside={true}>


                <YoutubeWrapper>
                            <TextWrapper>
                                <Speaker>
                                    <ServicesIcon src={'https://www.stern.nyu.edu/faculty/static/photos/vacharya.jpg'}/>
                                </Speaker>
                                <Speakerbio>
                                    {/*<TopLine lightText={YoutubeOne.lightText}>{YoutubeOne.topLine}</TopLine>*/}
                                    <Heading lightText={YoutubeOne.lightText}>{YoutubeOne.headline}</Heading>
                                    <Subtitle darkText={YoutubeOne.darkText}>{YoutubeOne.subtitle}</Subtitle>
                                </Speakerbio>
                                <Content lightText={YoutubeOne.lightText}>{YoutubeOne.description}</Content>
                                
                            </TextWrapper>
                            <ImgWrap>
                            <YouTube videoId="wHihLrcZF0o" opts={opts} />
                            </ImgWrap>
                            <ImgWrap2>
                            <YouTube videoId="wHihLrcZF0o" opts={opts2} />
                            </ImgWrap2>
                </YoutubeWrapper>


                <YoutubeWrapper>
                    <TextWrapper>
                        <Speaker>
                            <ServicesIcon src={'https://starsunfolded.com/wp-content/uploads/2020/12/Saurabh-Dwivedi.jpg'}/>
                        </Speaker>
                        <Speakerbio>
                            {/*<TopLine lightText={YoutubeTwo.lightText}>{YoutubeTwo.topLine}</TopLine>*/}
                            <Heading lightText={YoutubeTwo.lightText}>{YoutubeTwo.headline}</Heading>
                            <Subtitle darkText={YoutubeTwo.darkText}>{YoutubeTwo.subtitle}</Subtitle>
                        </Speakerbio>
                        <Content lightText={YoutubeTwo.lightText}>{YoutubeTwo.description}</Content>
                       
                    </TextWrapper>
                    <ImgWrap>
                        <YouTube videoId="wHihLrcZF0o" opts={opts} />
                    </ImgWrap>
                    <ImgWrap2>
                        <YouTube videoId="wHihLrcZF0o" opts={opts2} />
                    </ImgWrap2>
                </YoutubeWrapper>

                <YoutubeWrapper>
                        <TextWrapper>
                            <Speaker>
                                <ServicesIcon src={'https://thediplomat.com/wp-content/uploads/2014/10/sizes/td-story-s-1/thediplomat_2014-10-07_18-28-29.jpg'}/>
                            </Speaker>
                            <Speakerbio>
                                <Heading lightText={YoutubeThree.lightText}>{YoutubeThree.headline}</Heading>
                                <Subtitle darkText={YoutubeThree.darkText}>{YoutubeThree.subtitle}</Subtitle>
                            </Speakerbio>
                            <Content lightText={YoutubeThree.lightText}>{YoutubeThree.description}</Content>
                            
                        </TextWrapper>
                            <ImgWrap>
                            <YouTube videoId="77lB8WgJa28" opts={opts} />
                            </ImgWrap>
                            <ImgWrap2>
                            <YouTube videoId="77lB8WgJa28" opts={opts2} />
                            </ImgWrap2>
                </YoutubeWrapper>

                <YoutubeWrapper>
                    <TextWrapper>
                        <Speaker>
                            <ServicesIcon src={'https://images.outlookindia.com/public/uploads/articles/2019/7/31/Derek_20181227_350_630_630_630_571_855.jpg'}/>
                        </Speaker>
                        <Speakerbio>
                            <Heading lightText={YoutubeFour.lightText}>{YoutubeFour.headline}</Heading>
                            <Subtitle darkText={YoutubeFour.darkText}>{YoutubeFour.subtitle}</Subtitle>
                        </Speakerbio>
                        <Content lightText={YoutubeFour.lightText}>{YoutubeFour.description}</Content>
                      
                    </TextWrapper>
                    <ImgWrap>
                        <YouTube videoId="wHihLrcZF0o" opts={opts} />
                    </ImgWrap>
                    <ImgWrap2>
                        <YouTube videoId="wHihLrcZF0o" opts={opts2} />
                    </ImgWrap2>
                </YoutubeWrapper>
</Carousel>
            <IGS_hr/>
</YoutubeContainer>

 )
   
}

export default Youtube
