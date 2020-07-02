import React, { FunctionComponent } from 'react';

import { DefaultLayout } from './layouts/default';
import { NavView } from './nav';

export interface IndexViewProps { title: string }

export const IndexView: FunctionComponent<IndexViewProps> = ({ title }) => 
<DefaultLayout title={title}>
{/*----------------------------------------
     Hero Section
  -----------------------------------------*/}
<section className="hero is-light is-bold">
  <div className="hero-head">
    <NavView />
  </div>

  <div className="hero-body">
    <div id="clock"></div>
    <div id="hello"></div>
  </div>

  <div className="hero-foot">
    Footer
  </div>
</section>
</DefaultLayout>
