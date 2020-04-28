import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './index.scss';

export interface Props {
  action: any;
  type: string;
}

export default function ControlCounterButton(props: Props) {
  const { action, type } = props;
  return (
    <div className="controlCounterButton">
      <Button inverted onClick={action} className="controlCounterButton">
        <Icon
          name={type === 'add' ? 'add' : 'minus'}
          className="controlCounterButton"
        />
      </Button>
    </div>
  );
}
