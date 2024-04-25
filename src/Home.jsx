import React, {useState, useEffect} from "react"
import image from  './assets/Untitled design (3).png'
import image1 from './assets/walk_to_school.png'
import image5 from './assets/talents.jpg'
import image2 from './assets/the_flag.png'
import image3 from './assets/red_heart.png'
import image4 from './assets/lend_a_hand.png'
import image6 from './assets/mentor_img.png'
import image7 from './assets/soccer_img.jpeg'
import out8 from './assets/outreach8.jpg'
import out9 from './assets/outreach9.jpg'
import out14 from './assets/outreach14.png'
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {

    const slideimg = [
        { src: image, className: 'img' },
        { src: out8, className: 'second-class', style: { width: '20px', height: 'auto'} },
        { src: out9, className: 'third-class' },
        { src: out14, className: 'fourth-class' }
    ]
    const [currentInd, setCurrentInd] = useState(0);

    const nextImg = () => {
        setCurrentInd((prevIndex) => (prevIndex === slideimg.length -1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextImg, 3000);
        return () => clearInterval(interval)
    }, []);

    return(
        <section>
        <div className='container'>
            
            <img className='img' src={slideimg[currentInd].src} alt="some of the mentored children" />
            
            <h1 className ='home-content'>Empowering the next generation by giving<br /> them a chance to dream through: <br /> <span className='edu'>Education</span> | <span className='tal'> Talent</span> | <span className='men'>Mentorship</span> | <span className='spo'>Sports </span></h1>
            <h2 className='call-action'> {/* <span className='call'> Call to Action</span> <br /> */}We invite you to be a part of our mission by making a donation today. No amount is too small, and every contribution plays a crucial role in shaping the lives of these deserving children. Together, we can be the support system that they need to overcome adversity and build a brighter future.</h2>
            
            <div className='hr'>
                
                <h4 className='vision-statement'> <span className='vision'> Our Vision</span> <br />We envision a world where every child breaks free from poverty,<br /> dreams beyond limits, and builds  a hopeful, resilient future through<br /> love, education, and stability. </h4>

                <h4 className='mission-statement'> <span className='mission'> Our Mission </span><br /> 
                Our organization is dedicated to fostering a caring environment <br />for underprivilledged children, providing essential needs, love,<br /> and the support that they deserve.</h4>
                <button className='photos'>Tour the village <FontAwesomeIcon icon={faCamera} size="1.5x"/></button>
                
            
            </div>
            {/* put in an h4 then different head and paragraph className */}
            <div>
              <div className='impact-cont'>
                
                <p className='impact-head'>On Education <span className='edu-cont'> <br/>Education fuels dreams. It's the key that unlocks endless possibilities.<br /> Our charity focuses solely on the  transformative power of education, <br />encouraging children to dream big and remain in school. Through tailored <br />programs and unwavering support, we empower children to believe in <br />themselves and their potential, helping them turn their dreams into reality.</span> </p>
                
                <img className='impact-image' src={image1} alt="mother taking child to school"/>
                </div>
    

            <div className = 'talent'>
                
                <p className='on-tal'>On Talent <br/><span className='tal-cont'>Talent sparks endless possibilities. Our charity empowers children to <br />believe in their innate abilities, so that they can transform their wildest <br />dreams into tangible reality through tailored programs and unwavering support.<br /> Talent has always been a foundational cornerstone, shaping a future <br />of boundless opportunities and creative exploration, and limitless growth.</span> </p>
                <img className='img-tal' src={image5} alt="young children playing drums."/>
                
            </div>

            <div className="on-ment">
                <p className='on-ment-header'>On Mentorship <br /> <span className='ment-cont'> Our organization connects experienced individuals with aspiring youth, <br />guiding them toward growth and success. Mentorship illuminates paths to <br />realization and resilience through personalized guidance and encouragement. <br />It's the cornerstone of our mission, nurturing a community where expertise <br />meets ambition, forging futures filled with promise and purpose.</span> </p>
                <img className='ment-image' src={image6} alt="mentorship meeting in progress" width='430px' height='auto' />
            </div>

            <div className='on-sports'>
              
                <p className='on-sports-header'>On Sports <br /> <span className='cont-sports'>Our organization brings together seasoned athletes with emerging talents, <br />providing mentorship and resources to guide them towards achievement and<br /> triumph. At our core, we meticulously plan and execute community tournaments<br /> in both rugby and football, fostering a vibrant and inclusive community where <br />skill meets aspiration, purpose, and endless opportunities for growth.</span> </p>
                <img className='img-sports'src={image7} alt="school children playing sports" />
                
               
            </div>
            </div>
            </div>
            <br /> <br /> <br /> <br /> <br />

            <div className='life-touched'>
                <img className='kenya-flag'src={image2} alt="flag of kenya" width='100px' height='auto'/>

                <p className='operations'> <span className='three'>3</span> <br /> The Mentorship Haven operates <br />in  three counties in kenya. </p>

                <img className='heart'src={image3} alt="red heart" width="100px" height="auto" />
                <p className='period'> <span className='months'>11</span> <br /> For 11 months now, we have been radically changing<br /> lives of the less fortunate in our communitunities.</p>
                
                <img className='lend-hand' src={image4} alt="lend a hand" width="100px" height="auto"/>
                <p className='donate5'> <span className='pound'>£ 5</span> <br />  For just five pounds per month, you can make <br /> a big impact on the life of a vulnerable child.</p>
             </div>
             
            
            </section>

         )
     }
      export default Home;


                

