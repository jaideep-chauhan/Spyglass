import React from 'react';
import './Style.css';


export default function Benifits() {
  return (
    <div className='main-benifit'>
        <div className='benift'>
            <h5>HR CONSULTING SERVICES</h5>
            <h1>Companies Benefits</h1>
            <p>Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit, sed do eiusmod tmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vriatur.</p>
                 <p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                     laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.

</p>
<button>MORE INFO</button>
        </div>
        <div className='benift-value'>
            <div className='bt1-values'>
            <span class="iconify" data-icon="fluent:target-arrow-20-regular"></span>
                <h1>100</h1>
                <p className='p-mrgn'>COMPANY WE HELP</p>
                <span class="iconify" data-icon="healthicons:i-training-class"></span>
                <h1>10</h1>
                <p>TRAININGS COURCES</p>
            </div>
            <div className='bt2-values'>
            <span class="iconify" data-icon="bxs:shopping-bags"></span>
            <h1>100</h1>
                <p className='p-mrgn'>CORPORATE PROGRAMS</p>
                <span class="iconify" data-icon="carbon:partnership"></span>
                <h1>10</h1>
                <p>STRATEGIC PARTNERS</p>
            </div>
        </div>
    </div>
  )
}
