import React from 'react';
import { CodeSnippet } from 'carbon-components-react';

const HowWeDo = () => {
  	return (
  		<div className="code-sec">
  			<CodeSnippet className="bx--snippet--wraptext" type="multi" feedback="Copied!">
	          	<h5><span className="underline">How we do it</span></h5>
            	<div className="text-white d-block code-txt-sec"><span className="how-we-do-font">{
`We're your co-founder. We research, design and build your product with you. We solve the toughest data and design problems, and
navigate the way to finding strong & repeatable custome validation and growth. We bring deep experience in operations and raising
millions of dollars in capital. We invest everything we go in your success.`}</span>
					<br/>
					<br/>
	              	<div className="d-flex row code-ul">
		                <ol className="bx--col-lg-5 pl">
		                  	<li><span>1</span> Competitive Research</li>
		                  	<li><span>2</span> Concept Validation</li>
		                  	<li><span>3</span> Prototypes & System Design</li>
		                  	<li><span>4</span> ML/Data Science</li>
		                  	<li><span>5</span> Go-To-Market</li>
		                  	<li><span>6</span> Visual & UX Design</li>
		                  	<li><span>7</span> Product Creation</li>
		                </ol>
		                <ol className="bx--col-lg-5">
		                  	<li><span>8</span> Recruiting</li>
		                  	<li><span>9</span> Cap Table Planning</li>
		                  	<li><span>10</span>Fundraising</li>
		                  	<li><span>11</span>Company Formation</li>
		                  	<li><span>12</span>Finance & Operations</li>
		                  	<li><span>13</span>Patents</li>
		                  	<li><span>14</span>Legal & HR</li>
		                </ol>
	              	</div>
	            </div>
	        </CodeSnippet>
  		</div>
  	);
};
export default HowWeDo;