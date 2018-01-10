import React, { Component } from 'react';
import ModalExample from './ModalExample'
import SerializedFormContainer from '../containers/SerializedFormContainer'
import ControlledFormContainer from '../containers/ControlledFormContainer'
import { Button, Jumbotron, Container, Alert, Badge, Progress } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Container>
          <h2>Welcome to My reactstrap Kitchen Sink</h2>
          <p className="lead">Bootstrap 4 React Components</p>
          </Container>
        </Jumbotron>

        <Container>
          <section>
            <h2>Buttons</h2>
            <Button>Default</Button>{' '}
            <Button color="primary">Primary</Button>{' '}
            <Button color="info">Info</Button>{' '}
            <Button color="success">Success</Button>{' '}
            <Button color="warning">Warning</Button>{' '}
            <Button color="danger">Danger</Button>{' '}
            <Button color="inverse">Inverse</Button>{' '}
          </section>
          <hr />

          <section>
            <h2>Serialized Form With Validations</h2>
            <SerializedFormContainer />
          </section>
          <hr />

          <section>
            <h2>Controlled Form With Live Validations</h2>
            <ControlledFormContainer />
          </section>
          <hr />

          <section>
            <h2>Modal</h2>
            <ModalExample buttonLabel="Click Me!" />
            </section>
          <hr />

          <section>
            <h2>Alerts</h2>
            <Alert color="success">
              <strong>Well done!</strong> You successfully read this important alert message.
            </Alert>
            <Alert color="info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </Alert>
            <Alert color="warning">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </Alert>
            <Alert color="danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </Alert>
          </section>
          <hr />

          <section>
            <h2>Badges</h2>
            <Badge>default</Badge>{' '}
            <Badge color="primary">primary</Badge>{' '}
            <Badge color="success">success</Badge>{' '}
            <Badge color="info">info</Badge>{' '}
            <Badge color="warning">warning</Badge>{' '}
            <Badge color="danger">danger</Badge>{' '}
            </section>
          <hr />

          <section>
            <h2>Progess</h2>
            <div className="text-center">0%</div>
            <Progress />
            <div className="text-center">25%</div>
            <Progress value="25" />
            <div className="text-center">50%</div>
            <Progress value={50} />
            <div className="text-center">75%</div>
            <Progress value={75} />
            <div className="text-center">100%</div>
            <Progress value="100" />
            <div className="text-center">Multiple bars</div>
            <Progress multi>
              <Progress bar value="15" />
              <Progress bar color="success" value="30" />
              <Progress bar color="info" value="25" />
              <Progress bar color="warning" value="20" />
              <Progress bar color="danger" value="5" />
            </Progress>
          </section>
          <hr />
        </Container>
      </div>
    );
  }
}

export default App;
