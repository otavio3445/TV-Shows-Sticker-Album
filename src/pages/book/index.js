import React, {
  useState
} from 'react';

const Book = () => {

  const handleSticker = () => {
    alert('Você não tem essa figurinha!')
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
            <div className="fig01" onClick={handleSticker}>01</div>
            <div className="fig02" onClick={handleSticker}>02</div>
            <div className="fig03" onClick={handleSticker}>03</div>
            <div className="fig04" onClick={handleSticker}>04</div>
            <div className="fig05" onClick={handleSticker}>05</div>
            <label htmlFor="c2" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p3">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c3" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01">06</div>
            <div className="fig02">07</div>
            <div className="fig03">08</div>
            <div className="fig04">09</div>
            <div className="fig05">10</div>
            <label htmlFor="c3" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p4">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c4" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01">11</div>
            <div className="fig02">12</div>
            <div className="fig03">13</div>
            <div className="fig04">14</div>
            <div className="fig05">15</div>
            <label htmlFor="c4" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p5">
          <div className="back">
            <img src={require('../../images/bg-capas/GA-WHITE.png').default} alt="contracapa" />
            <label htmlFor="c5" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01">16</div>
            <div className="fig02">17</div>
            <div className="fig03">18</div>
            <div className="fig04">19</div>
            <div className="fig05">20</div>
            <label htmlFor="c5" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
        <div className="flip" id="p6">
          <div className="back">
            <img src={require('../../images/contracapa.jpg').default} alt="contracapa" />
            <label htmlFor="c6" className="back-btn"><i className="fas fa-arrow-alt-circle-left"></i></label>
          </div>
          <div className="front" id="fig--pages">
            <div className="fig01">21</div>
            <div className="fig02">22</div>
            <div className="fig03">23</div>
            <div className="fig04">24</div>
            <div className="fig05">25</div>
            <label htmlFor="c6" className="next-btn"><i className="fas fa-arrow-alt-circle-right"></i></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
