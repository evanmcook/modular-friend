import React, { Component } from 'react';
import './portfolio.css';
import flambowPicture from './flambowOnCom.jpg';
import billyPicture from './billyElliotCueStack.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">

        <h1 className="subtitle"> Ongoing Projects </h1>
        <div class = "prfItem"> 
        
          <div> <p>Evan continues to provide support for the show control programming of <i>Pip's Island</i>.</p></div>
          <div> </div>

        </div>

       
        

       <h1 className="subtitle"> 2019</h1>

      <div class = "prfItem">
        <div>
        <h2>Sooner/Later</h2> <p>Original music from the DC premiere of Allyson Currin's <i>Sooner/Later</i>. <br></br> <br></br> Director: Gregg Henry <br></br>Sprenger Theater <br></br>Atlas Performing Arts Center<br></br>Washington, DC</p></div>
        
        <div className = "rObj" > <iframe title= "soonerMusic" width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/791894535%3Fsecret_token%3Ds-XM8TN&color=%234c5050&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></div>

        </div>

       <div class = "prfItem"> 
       
          <div> <h2>Pip's Island</h2><p>In early 2019, Evan did show control programming for <i>Pip's Island</i>.</p>
          
          <p>At the same time, he was the assistant sound designer, in charge of programming the four QLab workspaces that handled audio playback.</p>
          </div>
          <div className = "rObj"> <img src={flambowPicture} alt="A Flambow attends to the com line." width ="85%" ></img></div>
        
        </div>

        <h1 className="subtitle"> 2018</h1>
        
        
        <div class = "prfItem">
        
        <div> <h2>Billy Elliot: The Musical </h2>
          <p>In October and November of 2018, Evan assisted Ryan Hickey on the Signature Theatre's production of <i> Billy Elliot: The Musical. </i> 
            During his time on the production, Evan programmed a QLab workspace that allowed the music director and mix engineer to simultaneously take cues 
            on different cuelists without interrupting eachother. </p> 
            
            <p>The mix engineer was given a MIDI drum pad that sent program changes to QLab. These program changes were mapped to QLab's global "Musical" MIDI controls and used to operate the Main Cue List. 
              The music director used a separate MIDI-based remote to send a single program change message to specific groups in a separate cue list.
              <br></br> <br></br>The music director's group cues would:  <br></br><br></br>-trigger click track audio for the band<br></br> -enable the subsequent parent group's MIDI trigger <br></br>-disable the parent group's MIDI trigger <br></br>  -wait until the click track was complete, then arm the subsequent click track audio <br></br> -disarm the subgroup that handled the MIDI trigger enabling and disabling to prevent re-triggering.<br></br> <br></br>

              If the music director needed to stop the click track audio, his MIDI-based remote would trigger a stop cue that targeted only the cue list that containing click track audio. 
              Even if the music director chose to stop the audio of one click track, the group cues handling the enabling and disabling of MIDI triggers would not be halted during a pre-wait.<br></br><br></br>

              The music director's cue lists were reset at the top of show via a script cue, and the reset state could be visually confirmed by the mix engineer as a part of the pre-show check.
            </p>
        </div>
        <div className = "rObj"> <img src={billyPicture} alt="One part of the Billy Elliot cue stack." width ="85%" ></img></div>
        </div>

        
        
        <div class = "prfItem">
       
          <div>  <h2>Undead Joe, Airplane Fucker</h2> <p> <i>Undead Joe, Airplane Fucker</i> is a mixtape made entirely of cassette tapes found in thrift stores, combined with one book on tape found in a 'free' bin.
          It tells the story of a man who is raised from the dead, his relationship with his Kate, his mortality, his fear of commitment, and his airplanes.</p></div>
          <div class="rObj"><iframe title="undeadJoeMusic" width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/490991337%3Fsecret_token%3Ds-FFwby&color=%234c5050&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></div>
        

          
        </div>

        
        <div class = "prfItem">
          <div> 
          <h2>The Pavilion</h2> 
            <p>In the summer of 2018, Evan designed <i>The Pavilion</i> at The Hub Theatre.</p>  
            
           <p><a href="https://dcmetrotheaterarts.com/2018/04/01/review-the-pavilion-at-the-hub-theatre/" target="_blank" rel="noopener noreferrer"> Reviewer David Siegel made special mention of the sound design in his review.</a> </p> 
         
          </div>
         <div></div>
        </div>
        

        <h1 className="subtitle"> 2017</h1>
        <div class = "prfItem">
          <div><h2>The Love of the Nightingale</h2><p>Original music from a production of <i>The Love of the Nightingale</i>. <br></br> <br></br> Director: Shirley Serotsky <br></br>Callan Theater<br></br>The Catholic University of America<br></br>Washington, DC</p></div>
          <div class = "rObj">

          <iframe title="ngaleMusic" width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/431384172&color=%234c5050&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
        </div>
        
        <div class = "prfItem">
        <div>  <h2>yelling box</h2><p> <i>yelling box</i>  is the mostly-purposeful combination of two toys into a circuit that seems to be very upset. </p> </div>
        
        <div class = "rObj"> <iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319278009&amp;color=%23d0d3d5&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe></div>
       
        </div>
      </div>
      

    );
  }
}

export default Portfolio;