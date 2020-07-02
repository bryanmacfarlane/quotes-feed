import React, { FunctionComponent } from 'react';

import { DefaultLayout } from './layouts/default';

type ErrorViewProps = { statusCode: Number, message: string }

export const ErrorView: FunctionComponent<ErrorViewProps> = ({ statusCode, message }) => 
<DefaultLayout title={statusCode.toString()}>
  <div>Error {message}</div>
</DefaultLayout>