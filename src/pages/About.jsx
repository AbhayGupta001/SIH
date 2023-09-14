import React from "react";
import community from "../assets/community.jpg";
import waste from "../assets/Waste.jpg";
import contribute from "../assets/Contribute.jpg";
import rewards from "../assets/Rewards.jpg";
import { HighlightText } from "../components/HighlightText";

export const About = () => {
  return (
    <div className="about bg-[#F5F5F5]">
      {/* section 1 */}
      <section className="contain flexCol">
        <p className="center-text font-bold text-2xl my-4 bg-orange-200 self-stretch leading-10">About us</p>
        <div className="flexCol center-text">
          <p className="text-4xl font-semibold">Driving Innovation in <HighlightText text={"Erradicating Waste"}/> for a <HighlightText text={"Clean Future"}/> </p>
          <p className="about-desc center-text text-[#2AAA8A] font-bold text-lg">
            Our Platform is the forefront of driving Waste Management
            initiatives in our country. We're passionate about creating impact
            at large scale by managing waste at ground level by offering people
            community and mutual trust to be clean and keep clean.
          </p>

          <div className="flexRow media-col bg-[#CAFFB9] p-8 rounded-lg border-4 border-black my-10">
            {/* yahan pr vo teen images ddalde khali community contribute wali jo home page pr dali hui hai */}

            <div className="box border-2 border-black">
              <img src={community} className="w-fit"/>
            </div>
            <div className="box border-2 border-black">
              <img src={waste} className="w-fit h-fit" />
            </div>
            <div className="box border-2 border-black">
              <img src={contribute}/>
            </div>
          </div>

          <quote className='text-3xl font-bold leading-10 my-5 text-[#040273]'>
            "We are passionate about revolutionizing the way we manage waste.
            Our innovative platform combines technology, expertise, and
            community to create an unparalleled impact."
          </quote>
        </div>
       
       
        <div className="flex flex-col justify-between gap-4">
          <div className="flexRow media-col my-8">
            <div className="w-[60%]">
              <p className="heading">Communities</p>
              <p>
                These are the groups of people sharing a common region ensuring
                the strategic domestic as well as local waste management sharing
                mutuak trust among them. These Communities organize different
                cleaniness drives and earn rewards as a community. Best thing
                about these communities are that people help each other with
                trust among them attracting more and more people to work for
                waste management.
              </p>
            </div>

            <div className="max-w-[500px]">
              <img src="https://www.stelizabethhospice.org.uk/app/uploads/2021/01/Crowd-Photo-1-770x420.png" />
            </div>
          </div>

          <div className="flexRow flex-row-reverse media-col my-8">
            <div className="acitivity-box">
              <p className="heading">Rewards</p>
              <p>
                Our platform offers rewards to person as an individual for some
                specific activities in waste management which attract more and
                more people to encourage waste management and also increase in
                people participation in making country clean
              </p>
            </div>
            <div className="max-w-[500px]">
              <img src={rewards} />
            </div>
          </div>

          <div className="flexRow media-col my-8">
            <div>
              <p className="heading">Contribution</p>
              <p>
                Our platform constantly orgainizes the contribution drives and offer contributors with some sort of discounts in exchange of donations.Our  
              </p>
            </div>
            <div className="max-w-[500px]">
              <img src="https://donatelifenys.org/wp-content/uploads/2020/02/Ways-to-Make-Financial-Contribution-Icon-3-440x440.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
