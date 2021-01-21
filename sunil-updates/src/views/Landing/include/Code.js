import React from 'react';
import { CodeSnippet } from 'carbon-components-react';

const Code = () => {
  	return (
  		<div className="code-sec one">
  			<CodeSnippet className="bx--snippet--wraptext" type="multi" feedback="Copied!">
		    	<h5><span className="underline">Startup Studio</span></h5>
          		<div className="text-white code-txt-sec">{`
FTW = (studio, evt) =>  {
  const data = element.dataset;
  const label = (data.label) ?data.label : '';
  const previousValue = (data.previousValue) ?
    data.previousValue : `}<span className="text-primary text-blue">'We work with <br />enterpreneurs to turn the best ideas into <br />market-defining, funded companies with<br />rapid customer adoption.'</span>{`;
	const initialEvt = evt;
	this.changeState({
	  group: data.event,
	  initialEvt
  });
}`}
				</div>
		    </CodeSnippet>
  		</div>
  	);
};
export default Code;