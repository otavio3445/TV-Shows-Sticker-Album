import React, {
  useState,
} from 'react';
import { storage } from '../../components/firebase';
const pathReference = storage.ref();

const Book = () => {

  const [ga_fig01, setGa_fig01] = useState(null);
  const [ga_fig02, setGa_fig02] = useState(null);
  const [ga_fig03, setGa_fig03] = useState(null);
  const [ga_fig04, setGa_fig04] = useState(null);
  const [ga_fig05, setGa_fig05] = useState(null);
  const [ga_fig06, setGa_fig06] = useState(null);
  const [ga_fig07, setGa_fig07] = useState(null);
  const [ga_fig08, setGa_fig08] = useState(null);
  const [ga_fig09, setGa_fig09] = useState(null);
  const [ga_fig10, setGa_fig10] = useState(null);
  const [ga_fig11, setGa_fig11] = useState(null);
  const [ga_fig12, setGa_fig12] = useState(null);
  const [ga_fig13, setGa_fig13] = useState(null);
  const [ga_fig14, setGa_fig14] = useState(null);
  const [ga_fig15, setGa_fig15] = useState(null);
  const [ga_fig16, setGa_fig16] = useState(null);
  const [ga_fig17, setGa_fig17] = useState(null);
  const [ga_fig18, setGa_fig18] = useState(null);
  const [ga_fig19, setGa_fig19] = useState(null);
  const [ga_fig20, setGa_fig20] = useState(null);
  const [ga_fig21, setGa_fig21] = useState(null);
  const [ga_fig22, setGa_fig22] = useState(null);
  const [ga_fig23, setGa_fig23] = useState(null);
  const [ga_fig24, setGa_fig24] = useState(null);
  const [ga_fig25, setGa_fig25] = useState(null);

  const handleSticker = (name) => {
    pathReference.child(`images/${name}`).getDownloadURL().then(url => {
      switch (name) {
        case 'GA-01.png':
          setGa_fig01(url);
          break;
        case 'GA-02.png':
          setGa_fig02(url);
          break;
        case 'GA-03.png':
          setGa_fig03(url);
          break;
        case 'GA-04.png':
          setGa_fig04(url);
          break;
        case 'GA-05.png':
          setGa_fig05(url);
          break;
        case 'GA-06.png':
          setGa_fig06(url);
          break;
        case 'GA-07.png':
          setGa_fig07(url);
          break;
        case 'GA-08.png':
          setGa_fig08(url);
          break;
        case 'GA-09.png':
          setGa_fig09(url);
          break;
        case 'GA-10.png':
          setGa_fig10(url);
          break;
        case 'GA-11.png':
          setGa_fig11(url);
          break;
        case 'GA-12.png':
          setGa_fig12(url);
          break;
        case 'GA-13.png':
          setGa_fig13(url);
          break;
        case 'GA-14.png':
          setGa_fig14(url);
          break;
        case 'GA-15.png':
          setGa_fig15(url);
          break;
        case 'GA-16.png':
          setGa_fig16(url);
          break;
        case 'GA-17.png':
          setGa_fig17(url);
          break;
        case 'GA-18.png':
          setGa_fig18(url);
          break;
        case 'GA-19.png':
          setGa_fig19(url);
          break;
        case 'GA-20.png':
          setGa_fig20(url);
          break;
        case 'GA-21.png':
          setGa_fig21(url);
          break;
        case 'GA-22.png':
          setGa_fig22(url);
          break;
        case 'GA-23.png':
          setGa_fig23(url);
          break;
        case 'GA-24.png':
          setGa_fig24(url);
          break;
        case 'GA-25.png':
          setGa_fig25(url);
          break;
        default:
          break;
      }
    })
  }

  return (
    <div className="book">
      <input type="checkbox" id="c1" />
      <input type="checkbox" id="c2" />
      <input type="checkbox" id="c3" />
      <input type="checkbox" id="c4" />
      <input type="checkbox" id="c5" />
      <input type="checkbox" id="c6" />

      <div className="flip-book">
        <div className="flip" id="p1">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c1" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div>
            <img src={require('../../images/capa.jpg').default} alt="" />
            <label htmlFor="c1" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p2">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c2" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01" onClick={()=>handleSticker('GA-01.png')}>
              {ga_fig01 === null ? '01' :
                <img src={ga_fig01} alt="fig01" />
              }
            </div>
            <div className="fig02" onClick={()=>handleSticker('GA-02.png')}>
              {ga_fig02 === null ? '02' :
                <img src={ga_fig02} alt="fig02" />
              }
            </div>
            <div className="fig03" onClick={()=>handleSticker('GA-03.png')}>
              {ga_fig03 === null ? '03' :
                <img src={ga_fig03} alt="fig03" />
              }
            </div>
            <div className="fig04" onClick={()=>handleSticker('GA-04.png')}>
              {ga_fig04 === null ? '04' :
                <img src={ga_fig04} alt="fig04" />
              }
            </div>
            <div className="fig05" onClick={()=>handleSticker('GA-05.png')}>
              {ga_fig05 === null ? '05' :
                <img src={ga_fig05} alt="fig05" />
              }
            </div>
            <label htmlFor="c2" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p3">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c3" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01" onClick={()=>handleSticker('GA-06.png')}>
              {ga_fig06 === null ? '06' :
                <img src={ga_fig06} alt="fig06" />
              }
            </div>
            <div className="fig02" onClick={()=>handleSticker('GA-07.png')}>
              {ga_fig07 === null ? '07' :
                <img src={ga_fig07} alt="fig07" />
              }
            </div>
            <div className="fig03" onClick={()=>handleSticker('GA-08.png')}>
              {ga_fig08 === null ? '08' :
                <img src={ga_fig08} alt="fig08" />
              }
            </div>
            <div className="fig04" onClick={()=>handleSticker('GA-09.png')}>
              {ga_fig09 === null ? '09' :
                <img src={ga_fig09} alt="fig09" />
              }
            </div>
            <div className="fig05" onClick={()=>handleSticker('GA-10.png')}>
              {ga_fig10 === null ? '10' :
                <img src={ga_fig10} alt="fig10" />
              }
            </div>
            <label htmlFor="c3" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p4">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c4" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01" onClick={()=>handleSticker('GA-11.png')}>
              {ga_fig11 === null ? '11' :
                <img src={ga_fig11} alt="fig11" />
              }
            </div>
            <div className="fig02" onClick={()=>handleSticker('GA-12.png')}>
              {ga_fig12 === null ? '12' :
                <img src={ga_fig12} alt="fig12" />
              }
            </div>
            <div className="fig03" onClick={()=>handleSticker('GA-13.png')}>
              {ga_fig13 === null ? '13' :
                <img src={ga_fig13} alt="fig13" />
              }
            </div>
            <div className="fig04" onClick={()=>handleSticker('GA-14.png')}>
              {ga_fig14 === null ? '14' :
                <img src={ga_fig14} alt="fig14" />
              }
            </div>
            <div className="fig05" onClick={()=>handleSticker('GA-15.png')}>
              {ga_fig15 === null ? '15' :
                <img src={ga_fig15} alt="fig15" />
              }
            </div>
            <label htmlFor="c4" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p5">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c5" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01" onClick={()=>handleSticker('GA-16.png')}>
              {ga_fig16 === null ? '16' :
                <img src={ga_fig16} alt="fig16" />
              }
            </div>
            <div className="fig02" onClick={()=>handleSticker('GA-17.png')}>
              {ga_fig17 === null ? '17' :
                <img src={ga_fig17} alt="fig17" />
              }
            </div>
            <div className="fig03" onClick={()=>handleSticker('GA-18.png')}>
              {ga_fig18 === null ? '18' :
                <img src={ga_fig18} alt="fig18" />
              }
            </div>
            <div className="fig04" onClick={()=>handleSticker('GA-19.png')}>
              {ga_fig19 === null ? '19' :
                <img src={ga_fig19} alt="fig19" />
              }
            </div>
            <div className="fig05" onClick={()=>handleSticker('GA-20.png')}>
              {ga_fig20 === null ? '20' :
                <img src={ga_fig20} alt="fig20" />
              }
            </div>
            <label htmlFor="c5" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p6">
          <div className="back">
            <img src={require('../../images/contracapa.jpg').default} alt="contracapa" />
            <label htmlFor="c6" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01" onClick={()=>handleSticker('GA-21.png')}>
              {ga_fig21 === null ? '21' :
                <img src={ga_fig21} alt="fig21" />
              }
            </div>
            <div className="fig02" onClick={()=>handleSticker('GA-22.png')}>
              {ga_fig22 === null ? '22' :
                <img src={ga_fig22} alt="fig22" />
              }
            </div>
            <div className="fig03" onClick={()=>handleSticker('GA-23.png')}>
              {ga_fig23 === null ? '23' :
                <img src={ga_fig23} alt="fig23" />
              }
            </div>
            <div className="fig04" onClick={()=>handleSticker('GA-24.png')}>
              {ga_fig24 === null ? '24' :
                <img src={ga_fig24} alt="fig24" />
              }
            </div>
            <div className="fig05" onClick={()=>handleSticker('GA-25.png')}>
              {ga_fig25 === null ? '25' :
                <img src={ga_fig25} alt="fig25" />
              }
            </div>
            <label htmlFor="c6" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
