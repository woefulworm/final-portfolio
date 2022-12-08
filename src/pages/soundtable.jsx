import React from 'react';
import './design.css';

function Soundtable() {
    return (
      <body>
        <div className='title'>Soundtable</div>
            <div>
            For my end of semester Design Studio project, I built an Ableton controller.
              This project grew out of a desire to both simplify and introduce an aspect
          of play to sound synthesis. Modern digital sound synthesis relies on
          extensive knowledge of sine wave and wavetable properties, creating a high
          barrier to entry into the field.. As opposed to most software synthesizers, the
              Soundtable was designed to allow anyone&#8212;including those without
          experience&#8212;to experiment and, most importantly, play.
          The design is intentionally organic, placing
              it in direct contrast with the digital style popular in the field. Behind
              the scenes,{' '}
              <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
                Arduinos
              </a>{' '}
              send capacitive touch data through a serial port to a Python program, which
              controls parameters of{' '}
              <a href="https://vital.audio/" target="_blank" rel="noreferrer">
                Vital Basic
              </a>.
            </div>
            <div className='bricks'>
                <div className='brick'>
                    <div className='subhead'>Demo</div>
                    <iframe
                      src="https://player.vimeo.com/video/724583639?h=126fcc5a06&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="soundtable demo"
                      className="vimeo"
                    ></iframe>
                </div>
            <div className='brick'>
              <div className='subhead'>Build Process</div>
              <div className='disc'>
              Wanting to create a tactile, touchable interface without a digital
              asthetic, I decided on utilizng capative touch sensors and copper tape.
              My initial design consisted of overlapping sections of tape, however I
              got lots of interference in the signal, as overlapping signals would
              ground eachother and bring the outputs to zero.
              </div>
            <img className='smallimg' src="https://i.imgur.com/pGaSVib.jpg" />
            <img className='smallimg' src="https://i.imgur.com/Uyi6DF1.jpg" />
            <div className='disc'>
              As a result, I created an altertaitve design that, in the end, better suited 
              my needs. The final 
              </div>
            <img className='smallimg' src="https://i.imgur.com/W2rC6hg.jpg" />
            <div className='disc'>
              Then, when it came to creating the casing for the technology, it was 
              important for the project's goals to create a natrual looking piece of 
              furniture with organic materials. 
              
              </div>
            </div>
                <div className='brick'>
                    <div className='subhead'>Part 3: Hifi Prototype</div>
                    <div className='disc'>
                        After skteching, we mocked up this concept in Balsamiq. In the end, we decided to follow a more traditional search
                        engine layout, displayed in the second image, commmincating Andi's difference in the simplcity of the search
                        results. We decided to stick with box-based results that summarizes the most relevant information/high-level
                        summary first, and then follows up with more context. In this way, search results more directly answer the user's
                        inquiry and if needed they can easily find more related information. We agreed that stepping too far out of
                        convention would go against Andi's goal of creating a smoother, simpler search experience. We also included an
                        "About Andi" modal that communicates Andi's unique mission to users.
                    </div>
                    <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBCnAbV3iPSP5MVIB2xK0eJ%2Fiterative%3Fpage-id%3D0%253A1%26node-id%3D2%253A35%26viewport%3D372%252C174%252C0.19%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A35" allowfullscreen></iframe>
                </div>
                <div className='brick'>
                    <div className='subhead'>Part 4: User Testing</div>
                    <div className='disc'>
                        After implementing our changes from the critique, we tested our prototype with real users, giving them the following
                        prompt:
                    </div>
                    <div class="block-quote">"Andi is a search engine that uses generative AI models to generate simple answers to your
                        questions. Presented here is a prototype of Andi's user interface designed specifically for mobile users.
                        Suppose you want to visit the Brown Computer Science Department offices. Using Andi, find the location of the Brown
                        CS department and open the location in Apple Maps. As you complete the task, please think aloud so that our
                        designers can better understand your train of thought while using the interface. Thank you!"
                    </div>
                    <div className='disc'>
                        And these subtasks:
                        <ul><li>Using Andi, search for "Brown CS"</li><li>Navigate to the result containing the department's location</li><li>Open the building's location in "Maps"</li></ul>
                        From our first respondent, we noticed that he struggled with the second subtask, when attempting our given task, to find the address of the Brown CS Building. He found the search bar easily and was able to determine what each component on the page was. However, he expressed trouble figuring out whether he was supposed to select from the field of search queries automatically populated in the search bar or to click the search button call-to-action (CTA). This struggle is something that we anticipated, as our prototype only used a mock version of type-to-search functionality, so the search queries populating the dropdown menu were not based on anything the user typed in. This initial confusion was likely due to the user's mental model of type-to-search dropdowns in other interfaces, where, as you type, results are listed. However, our given dropdown menu only displayed content that we manually added to display on the screen. The user did, however, successfully search for Brown CS (one of our subtasks).
                        <br></br><br></br>Once the users completed this task, they were able to successfully search on our interface and complete the remaining subtasks, accomplishing our main task of finding the address for Brown CS. A piece of feedback we got from this user was to make the interface more indicative of the tasks the user needs to take on that given page. The second respondent was able to complete the task quickly and validated our expectation that the interface would be intuitive for a user unfamiliar with Andi, stating that the app was “simple and easy to use” (1:32 in video 4342277B). We found that the third user had an easy time navigating through the app and completing the task as well. She did struggle with the final sub-task of navigating from the individual search result page to the “open in maps” button. Both the third and first users expressed difficulty with noticing the maps icon when on the search results page. Since this was a bottleneck for completing the final sub-task of getting to the map view for two of the three users, we think that an area for improvement on our interface would be to 1.) making the map icon more prominent to the user and 2.) making the task more clear on the screen overall.
                    </div>
                    <iframe src="https://www.youtube.com/embed/PQk1jDrAmGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    <iframe src="https://www.youtube.com/embed/SNTNFMDG7Eg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    <iframe src="https://www.youtube.com/embed/fSNIWrx390g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
            </div>          
      </body>
    );  
}

export default Soundtable;