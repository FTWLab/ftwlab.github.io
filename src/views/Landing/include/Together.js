import React from 'react';
import { CodeSnippet } from 'carbon-components-react';

const Together = () => {
  	return (
  		<div className="code-sec one together-outer">
  			<CodeSnippet className="bx--snippet--wraptext" type="multi" feedback="Copied!">
		    	<h5><span className="underline">We’re in this together</span></h5><div className="text-white code-txt-sec">
Building a great startup is hard. Really hard.<br />
It requires domain expertise, uncommon talent,<br />
great execution, great timing, and a little <br />
luck. <br /><br />

It also requires the ever-elusive great idea.<br />
Our team has developed the playbook on how<br />
to rapidly validate, refine, and build new<br />
businesses.<br /><br />

Our ecosystem is a passionate and powerful<br />
network of CEOs, entrepreneurs, technologists,<br />
designers, data scientists, marketing<br />
thought-leaders, seasoned operators, and growth<br />
experts. We rally around you and your team like<br />
you’re family.<br />
				</div>
		    </CodeSnippet>
  		</div>
  	);
};
export default Together;