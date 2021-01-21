import React from 'react';
import Code from './include/Code';
import HowWeDo from './include/HowWeDo';
import Together from './include/Together';
import GetInTouch from './include/GetInTouch';
import { CheckmarkOutline32 } from '@carbon/icons-react';
import { Launch32 } from '@carbon/icons-react';


const Landing = () => {
  	return (
  		<div className="landing-page_outer">
		  	<div className="custom-container">
		  		<div className="bx--row landing-page__banner">
				  	<div className="bx--col-lg-12">
					    <div className="heading-outer">
						    <h1 className="landing-page__heading">
						      	Hello, it’s nice to meet us. 
						    </h1>
						    <h4>We work with entrepreneurs to turn the best ideas into market-<br />defining, funded companies with rapid customer adoption.</h4>
					    </div>
					</div>
				</div>
			  	<div className="bx--row code-snept-row">
				  	<div className="bx--col-lg-4">
				  		<Code />
					</div>
					<div className="bx--col-lg-8">
				  		<HowWeDo />
					</div>
				</div>
				<div className="approch-section" id="approch">
					<div className="bx--row">
						<div className="bx--col-lg-12">
							<h5 className="title-h5 mb-30"><span className="underline">Approach</span></h5>
						</div>
					  	<div className="bx--col-lg-8">
					  		<div className="approch-color">
					  			<div className="numbring">
					  				<span><CheckmarkOutline32 /></span>
					  				<div className="inner-number">
					  					<h4>Step 1 -  Ideation</h4>
					  					<p>The elusive big idea only accounts for 28% of a company's success. We want to work on unsolved problems a big market is experiencing. Vet your idea (or ours) closely with your market audience. </p>
					  				</div>
					  			</div>
					  			<div className="numbring">
					  				<span><CheckmarkOutline32 /></span>
					  				<div className="inner-number">
					  					<h4>Step 2 - Validation </h4>
					  					<p>Timing is everything when creating a startup. Extensive research feeds the development of a minimum viable product and go-to-market strategy, which is rigorously tested for user experience to know if your consumers and the market are ready.</p>
					  				</div>
					  			</div>
					  			<div className="numbring">
					  				<span><CheckmarkOutline32 /></span>
					  				<div className="inner-number">
					  					<h4>Step 3 - Text </h4>
					  					<p>If all the checks are passed, we kick into high gear to go from prototype to corporation, bringing in exciting talent for the flagship team. </p>
					  				</div>
					  			</div>
					  			<div className="numbring">
					  				<span><CheckmarkOutline32 /></span>
					  				<div className="inner-number">
					  					<h4>Step 4 - Fundraising</h4>
					  					<p>Getting funding is half the challenge, the other half is liking who you're getting into bed with. Through our networks of investors, we'll find great matches who share your vision. </p>
					  				</div>
					  			</div>
					  			<div className="numbring">
					  				<span><CheckmarkOutline32 /></span>
					  				<div className="inner-number">
					  					<h4>Step 5 - Roll-Out</h4>
					  					<p>Your company will continue to grow and scale independently, as we help build out your own team at various stages of your company's lifecycle. </p>
					  				</div>
					  			</div>
					  		</div>
						</div>
						<div className="bx--col-lg-4">
					  		<Together />
					  		<GetInTouch />
						</div>
					</div>
				</div>

				<div className="approch-section project-section" id="projects">
					<div className="bx--row">
						<div className="bx--col-lg-12">
							<h5 className="title-h5"><span className="underline">Projects</span></h5>
							<div className="project-btns">
								<span className="pink-btn">Research & Development</span>
								<span className="green-btn">Launched or Private Beta</span>
							</div>
						</div>
					  	<div className="bx--col-lg-4">
					  		<div className="fitkat-outer">
						  		<div className="link-circle">
							  		<a href="http://trywellspring.com/" target="_blank">trywellspring.com <span><Launch32 /></span> </a>
							  		<span className="dot-1 green-btn"></span>
						  		</div>
						  		<h2>Wellspring</h2>
						  		<p>Wellspring provides companies the opportunity to surprise and delight their employees by building custom curated wellness boxes full of products designed to improve their physical, mental, and spiritual wellbeing.</p>
					  		</div>
						</div>
						<div className="bx--col-lg-4">
					  		<div className="fitkat-outer">
						  		<div className="link-circle">
							  		<a href="https://www.transactables.com/" target="_blank">transactables.com <span><Launch32 /></span> </a>
							  		<span className="dot-1 pink-btn"></span>
						  		</div>
						  		<h2>Transactables</h2>
						  		<p>Transactables provides modular financial tools businesses need for quick access to funds and easy-to-customize digital wallets that unlock visibility and ease in team spending. </p>
					  		</div>
						</div>
						<div className="bx--col-lg-4">
					  		<div className="fitkat-outer">
						  		<div className="link-circle">
							  		<a href="#">private beta  </a>
							  		<span className="dot-1 green-btn"></span>
						  		</div>
						  		<h2>Agribusiness Marketplace</h2>
						  		<p>With Earth's ever growing population, there lays a massive opportunity for tremendous global investment interests throughout the foodtech value chain as global agribusiness moves quickly to catch up with the eCommerce trends globally.</p>
					  		</div>
						</div>
						<div className="bx--col-lg-4 mt-60">
					  		<div className="fitkat-outer">
						  		<div className="link-circle">
							  		<a href="#">stealth  </a>
							  		<span className="dot-1 pink-btn"></span>
						  		</div>
						  		<h2>Automated News </h2>
						  		<p>We're working on providing publishers with NLP (Voice) and AI-driven data visualization tools to increase consumer consumption of editorial content while broadening publisher's monetization options. </p>
					  		</div>
						</div>
						<div className="bx--col-lg-4 mt-60">
					  		<div className="fitkat-outer">
						  		<div className="link-circle">
							  		<a href="#">stealth  </a>
							  		<span className="dot-1 pink-btn"></span>
						  		</div>
						  		<h2>Glassdoor for Humans</h2>
						  		<p>A privacy service that aggregates and cleans personal data.  Through gamified community-authored, validated, rated, and scored personal data, the accuracy of a human's digital footprint can be democratically realized. </p>
					  		</div>
						</div>
						<div className="bx--col-lg-4 mt-60">
					  		<div className="fitkat-outer">
						  		<div className="link-circle">
							  		<a href="#">stealth </a>
							  		<span className="dot-1 pink-btn"></span>
						  		</div>
						  		<h2>Video meets Hiring </h2>
						  		<p>Gen Z-dominates social media platforms. Colleges, businesses looking to recruit and gain access to this audience are going to need modern tools to do so. </p>
					  		</div>
						</div>
						<div className="bx--col-lg-12 mt-60">
					  		<div className="fitkat-outer w-100">
						  		<div className="link-circle">
							  		<a href="mailto:hello@ftwlab.com">founder submission <span><Launch32 /></span></a>
						  		</div>
						  		<h2>Want to work with us?  </h2>
						  		<p>Risk is an inherent part of tackling market problems. Our venture process has de-risking and validation methodology built into it. We bring reason and process to help founders find meaningful data points to either kill or grow their ventures. </p><br /> 
						  		<p>We invest our money and other capital parnters' resources in moving you through a rigid and proven process in bringing your venture to market.</p>
					  		</div>
						</div>
					</div>
				</div>

				<div className="approch-section request-section">
					<div className="bx--row">
						<div className="bx--col-lg-12">
							<h5 className="title-h5"><span className="underline">Request for Startups </span>	</h5>
						</div>
						<div className="bx--col-lg-12">
							<div className="ideas-funding">
							<h4>Idesas we’re interested in bringing through the studio or funding:  </h4>
							<ul>
								<li><span className="pink-color">PERSONAL DATA</span> / Data aggregation to review your personal data on the internet and remove such data.</li>
								<li><span className="pink-color">PERSONAL DATA</span> / Modern identity theft tools/pseudonym orchestration & tracking </li>
								<li><span className="pink-color">PERSONAL DATA</span> / Non tokenized decentralized or mesh network-enabled personal data storage and or communication systems </li>
								<li><span className="pink-color">PERSONAL DATA</span> / Consortium models to programmatically facilitate legal action against data incumbents around data liability and ownership.  </li>
								<li><span className="green-color">ALL</span> / Preemptive usage monitoring solutions for GPU clouds to be able to detect AI attacks or disinformation by utilization patterns </li>
								<li><span className="green-color">ALL</span> / Content provenance and authentication/AI participation detection </li>
								<li><span className="green-color">ALL</span> / Gamification within the human detection of disinformation and or AI produced content </li>
								<li><span className="green-color">ALL</span> / Developer tools and frameworks to improve detection of disinformation/synthetic media and or AI produced content or deep fakes</li>
								<li><span className="yellow-color">FRAMEWORKS</span> / AP protocol type models to identify contributory 'futures'/betting markets to identify social and political trends </li>
								<li><span className="yellow-color">FRAMEWORKS</span> / Who's building the next REACT or VUE.js framework? </li>
							</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-part">
					<div className="bx--row">
						<div className="bx--col-lg-12">
							<div className="footer-inner">
								<div className="footerlogo-part">
									<a href="/" className="footer-logo">FTW</a>
									<p>“Risk comes from not knowing what<br />you're doing.” - Warren Buffett </p>
								</div>
								<div className="footeraddr-part">
									<p>Based in Austin, TX<br /> Twitter: <a className="underline" href="https://twitter.com/ftw_lab" target="_blank">@ftw_lab</a> <br /> <a href="https://github.com/FTWLab" target="_blank" className="underline">Github.com/FTWLab</a> <br /><span> <a href="mailto:hello@ftwlab.com" className="underline">hello@ftwlab.com</a></span> <br /><a href="/legal" className="underline">Legal</a></p>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Landing;


			    