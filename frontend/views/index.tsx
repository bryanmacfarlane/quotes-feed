import React, { FunctionComponent } from 'react';

import { DefaultLayout } from './layouts/default';
import { NavView } from './nav';
import { Hello } from './components/hello';

export interface IndexViewProps { 
  title: string, 
  message: string,
  state?: string  // optional since only server sets
                  // TODO: get rid of passing around ideally
}

export const IndexView: FunctionComponent<IndexViewProps> = ({ title, message, state }) => 
<DefaultLayout title={title} state={state}>
  {/*----------------------------------------
      Hero Section
    -----------------------------------------*/}
  <section className="hero is-light is-bold">
    <div className="hero-head">
      <NavView />
    </div>

    <div className="hero-body">
      <div id="clock"></div>
      <Hello name={ message }/>
    </div>

    <div className="hero-foot">
      Footer
    </div>
  </section>
</DefaultLayout>
