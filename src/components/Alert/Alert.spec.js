import React from 'react';
import { fireEvent, render, renderToJson, theme } from '../utility-test';
import Alert from '.';

const alerts = [
  {
    title: 'Info',
    description: 'info Alert click to close',
  },
  {
    title: 'Success',
    description: 'success Alert click to close',
  },
  {
    title: 'Danger',
    description: 'danger Alert click to close',
  },
  {
    title: 'Warning',
    description: 'Warning Alert click to close',
  },
];

describe('Test Alert', () => {
  const Component = (props) => (
    <Alert
      data-testid="Alert"
      title={alerts[0].title}
      description={alerts[0].description}
      {...props}
    />
  );

  test('renders a Alert with the correct data', () => {
    const { getByTestId } = render(<Component />);
    const Alert = getByTestId('Alert');
    const title = getByTestId('alert-title');
    const description = getByTestId('alert-description');

    // Alert componet is in the DOM / visible
    expect(Alert).toBeInTheDocument();

    // Alert componet  title is in the DOM / correct
    expect(title).toHaveTextContent(alerts[0].title);

    // Alert componet  description is in the DOM / correct
    expect(description).toHaveTextContent(alerts[0].description);
  });

  test('Alert should be disapear when clicking on the close button', () => {
    const { queryByTestId, getByRole } = render(<Component />);

    // Alert componet is in the DOM / visible
    expect(queryByTestId('Alert')).toBeInTheDocument();

    // Close the Alert by clicking on a close button
    fireEvent.click(getByRole('closeButton'));

    //  Alert is not displayed
    expect(queryByTestId('Alert')).toBeNull();
  });

  test('check that applyed theme colors props passed correctly', () => {
    const cssP = 'border-left';
    const alertBorder = theme.components.alert[cssP];
    const AlertPrimary = renderToJson(Component)({ $primary: true });
    const AlertInfo = renderToJson(Component)({ $info: true });
    const AlertWarning = renderToJson(Component)({ $warning: true });
    const AlertSuccess = renderToJson(Component)({ $success: true });
    const AlertDanger = renderToJson(Component)({ $danger: true });

    expect(AlertPrimary).toHaveStyleRule(
      cssP,
      alertBorder + theme.color.$primary
    );
    expect(AlertInfo).toHaveStyleRule(cssP, alertBorder + theme.color.$info);
    expect(AlertWarning).toHaveStyleRule(
      cssP,
      alertBorder + theme.color.$warning
    );
    expect(AlertSuccess).toHaveStyleRule(
      cssP,
      alertBorder + theme.color.$success
    );
    expect(AlertDanger).toHaveStyleRule(
      cssP,
      alertBorder + theme.color.$danger
    );
  });
});
