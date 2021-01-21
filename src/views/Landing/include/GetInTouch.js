import React from 'react';
import { CodeSnippet } from 'carbon-components-react';

const GetInTouch = () => {
  	return (
  		<div className="code-sec one get-in-touch-code">
  			<CodeSnippet className="bx--snippet--wraptext" type="multi" feedback="Copied!">
          		<div className="text-white code-txt-sec">
					<span className="text-primary">get in touch - hello@ftwlab.com</span>
				</div>
		    </CodeSnippet>
  		</div>
  	);
};
export default GetInTouch;