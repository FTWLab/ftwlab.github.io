import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { CodeSnippet } from 'carbon-components-react';



export const StartupStudio = () => (

  <section className="container d-flex">
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-4 one">
        <CodeSnippet {...props()} type="multi" feedback="Copied to clipboard">

          <p className="text-white">Startup Studio</p>
          <div className="text-white">{`
FTW = (studio, evt) =>  {
const data = element.dataset;
const label = (data.label) ?data.label : '';
const previousValue = (data.previousValue) ?
data.previousValue : `}<span className="text-primary">'We work with enterpreneurs to turn the best ideas into market-defining, funded companies with rapid customer adoption.'</span>{`;
const initialEvt = evt;
this.changeState({
 group: data.event,
 initialEvt
});
}`}
          </div>

        </CodeSnippet>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-8 two">
        <CodeSnippet {...props()} type="multi" feedback="Copied to clipboard">

          <p className="text-white">How we do it</p>
          <div className="">
            <div className="text-white d-block">{
              `We are your co-founder. We research, design and build your product with you. We solve the toughest data and design problems, and navigate the way to finding strong & repeatable customer validation and growth. We bring experience raising millions of dollars of capital and bring deep operation experience. We invest everything we go in your success.`}
<br/>
<br/>
              <div className="d-flex row">
                <ol className="col">
                  <li>Competitive research</li>
                  <li>Concept Validation</li>
                  <li>Prototypes & System Design</li>
                  <li>ML/Data Science</li>
                  <li>Go-To-Market</li>
                  <li>Visual & UX Design</li>
                  <li>Product Creation</li>
                </ol>
                <ol className="col">
                  <li>Recruiting</li>
                  <li>Cap Table Planning</li>
                  <li>Fundraising</li>
                  <li>Company Formation</li>
                  <li>Finance & Operations</li>
                  <li>Patents</li>
                  <li>Legal & HR</li>
                </ol>
              </div>
              
            </div>
          </div>

        </CodeSnippet>
      </div>


    </div>

  </section>
);

export default StartupStudio;

const props = () => ({
  type: select(
    'Type',
    {
      inline: 'inline',
      'single line': 'single',
      'multiple line': 'multi',
    },
    'inline'
  ),
  light: boolean('Light variant', false),
  feedback: text('Feedback text', 'Copied to clipboard'),
  showMoreText: text('Text for "show more" button', 'Show more'),
  showLessText: text('Text for "show less" button', 'Show less'),
  hideCopyButton: boolean('Hide copy button', false),
  onClick: action('onClick'),
  copyButtonDescription: text('Copy button title', 'Copy code snippet'),
  ariaLabel: text('ARIA label', 'Container label'),
  wrapText: boolean('Wrap text', true),
});