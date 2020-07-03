import React, { FunctionComponent } from 'react';

import { DefaultLayout } from './layouts/default';
import { NavView } from './nav';
import { Hello } from './components/hello';
import { State } from './components/state';

export interface IndexViewProps { 
  title: string, 
  message: string
}

export const IndexView: FunctionComponent<IndexViewProps> = ({ title, message }) => {
  let stateJson: string = JSON.stringify({title: title, message: message});
  return <DefaultLayout title={title}>
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
            <State state={stateJson}/>
            <script src="script/index.js"></script>  
          </DefaultLayout>
}

