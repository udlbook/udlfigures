import './App.css';
import MathProvider from './components/MathProvider';
import Figure2_1 from './Figure2_1';
import Figure2_2 from './Figure2_2';
import Figure2_4 from './Figure2_4';
import Figure3_3 from './Figure3_3';
import Figure3_8a from './Figure3_8a';
import Figure3_8b from './Figure3_8b';
import Figure4_1 from './Figure4_1';
import Figure6_2 from './Figure6_2';
import Figure6_4 from './Figure6_4' ; 
import Figure4_5 from './Figure4_5';
import img from './images/book_cover.jpg'
import React, {useState} from 'react'
import open_icon from './images/icons8-open-pane-50.png'
import close_icon from './images/icons8-close-pane-50.png'
import next_icon from './images/icons8-next-button-50.png'
import prev_icon from './images/icons8-previous-button-50.png'

function App() {
  const [figure_open, set_figure_open] = useState([1,0,0,0,0, 0,0,0,0,0, 0,0,0])
  const [side_pane_open, set_side_pane_open] = useState(true)

  const next_figure = () => {
    var index = figure_open.findIndex(val=>val > 0)
    index = index+1 
    if(index==13) {index = 0}
    var new_figure_open = [0,0,0,0,0, 0,0,0,0,0, 0,0,0]
    new_figure_open[index] = 1
    set_figure_open(new_figure_open)
  }

  const prev_figure = () => {
    var index = figure_open.findIndex(val=>val > 0)
    index = index-1 
    if(index==-1) {index = 12}
    var new_figure_open = [0,0,0,0,0, 0,0,0,0,0, 0,0,0]
    new_figure_open[index] = 1
    set_figure_open(new_figure_open)
  }


  return (
    <div className="App">
        <MathProvider>
          <div className = "open-close-container">
            { side_pane_open && (
              <button className = "open-close-button" onClick={()=>{set_side_pane_open(false)}}>
                <img src={open_icon} alt="Close panel" height={30}/>
              </button>            
            )}
            { !side_pane_open && (
              <button className = "open-close-button" onClick={()=>{set_side_pane_open(true)}}>
                <img src={close_icon} alt="Open panel" height={30}/>
              </button>            
            )}
        </div >


          <div className = 'two-columns'>
            {side_pane_open && (
              <div className = 'navbar'  >
                <a href="http://udlbook.com"  target="_blank">
                  <img src={img} alt="Book Cover" />
                </a>
                <div className="links-container">
                  <button className = {figure_open[0]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([1,0,0,0,0, 0,0,0,0,0, 0,0,0])}}>
                      2.1 - 1D Linear model
                    </button>
                    <button className = {figure_open[1]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,1,0,0,0, 0,0,0,0,0, 0,0,0])}} >
                      2.2 - Least squares loss
                    </button>
                    <button className = {figure_open[2]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,1,0,0, 0,0,0,0,0, 0,0,0])}} >
                      2.4 - Loss function
                    </button>
                    <button className = {figure_open[3]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,1,0, 0,0,0,0,0, 0,0,0])}} >
                      3.3a - 1D shallow network (ReLU)
                    </button>
                    <button className = {figure_open[4]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,1, 0,0,0,0,0, 0,0,0])}} >
                      3.3b - 1D shallow network (sigmoid)
                    </button>
                    <button className = {figure_open[5]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 1,0,0,0,0, 0,0,0])}} >
                      3.3c - 1D shallow network (Heaviside)
                    </button>
                    <button className = {figure_open[6]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 0,1,0,0,0, 0,0,0])}} >
                      3.8a - 2D Linear model
                    </button>
                    <button className = {figure_open[7]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 0,0,1,0,0, 0,0,0])}} >
                      3.8b - 2D shallow network (ReLU)
                    </button>
                    <button className = {figure_open[8]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 0,0,0,1,0, 0,0,0])}} >
                      3.8b - 2D shallow network (sigmoid)
                    </button>
                    <button className = {figure_open[9]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 0,0,0,0,1, 0,0,0])}} >
                      4.1 - Concatenating networks
                    </button>
                    <button className = {figure_open[10]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 0,0,0,0,0, 1,0,0])}} >
                      4.5 - Deep network computation
                    </button>
                    <button className = {figure_open[11]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 0,0,0,0,0, 0,1,0])}} >
                      6.2 - Gabor model
                    </button>                
                    <button className = {figure_open[12]===1 ? 'link-inactive' :'link'} onClick={()=>{set_figure_open([0,0,0,0,0, 0,0,0,0,0, 0,0,1])}} >
                      6.4 - Gabor loss function
                    </button>
                  </div>
                  <div className="feedback-container">
                    <div className="feedback">
                        Send errata / feedback / suggestions to udlbookmail@gmail.com.
                    </div>
                  </div>
              </div>
            )}

            <div className="prev-button-container">
              <button className = "prev-next-button" onClick={()=>{prev_figure()}}>
                    <img src={prev_icon} alt="Prev_icon" height={30}/>
              </button>   
            </div>    

            <div className='figure-container'>   
                {figure_open[0]===1 && (<Figure2_1/>)}     
                {figure_open[1]===1 && (<Figure2_2/>)}   
                {figure_open[2]===1 && (<Figure2_4/>)}     
                {figure_open[3]===1 && (<Figure3_3/>)}    
                {figure_open[4]===1 && (<Figure3_3 activation_type="sigmoid"/>)}     
                {figure_open[5]===1 && (<Figure3_3 activation_type="Heaviside"/>)}    
                {figure_open[6]===1 && (<Figure3_8a/>)}     
                {figure_open[7]===1 && (<Figure3_8b/>)}    
                {figure_open[8]===1 && (<Figure3_8b activation_type="sigmoid"/>)}     
                {figure_open[9]===1 && (<Figure4_1/>)}    
                {figure_open[10]===1 && (<Figure4_5/>)}     
                {figure_open[11]===1 && (<Figure6_2/>)}    
                {figure_open[12]===1 && (<Figure6_4/> )}     
            </div>

            <div className="next-button-container">
              <button className = "prev-next-button" onClick={()=>{next_figure()}}>
                    <img src={next_icon} alt="next icon" height={30}/>
              </button>   
            </div>    

          </div>
        </MathProvider>
    </div>
  );
}

export default App;
