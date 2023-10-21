import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  fireEvent,
  getByTestId,
  queryByText,
  queryByRole,
} from '@testing-library/react';
import 'jest-styled-components';
//import renderer from 'react-test-renderer';
import Button from '../Button';
import Modal from '.';
import fake_data from '../../fake-data';

const { modal } = fake_data.pages;
const Component = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => setShow(!show);
  return (
    <>
      <Button data-testid="trigger-btn" $primary $rounded onClick={toggle}>
        {modal.page.triggerBtn}
      </Button>

      <Modal data-testid="modal-container" onToggleModal={toggle} show={show}>
        <Modal.Header title={modal.page.title} />
        <Modal.Body>
          <p>{modal.page.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button $primary label="Ok" $rounded onClick={toggle} />
          <Button $danger label="Cancel" $rounded onClick={toggle} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

describe('first', () => {
  test('Modal should display on props show change ', () => {
    const { getByTestId, queryByTestId } = render(<Component />);

    // First the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();

    // Click the trigger button to display the modal
    fireEvent.click(getByTestId('trigger-btn'));

    // Now it's visible
    expect(queryByTestId('modal-container')).toBeInTheDocument();
  });
  test('Modal should display header correctly', () => {
    const { getByTestId, queryByTestId } = render(<Component />);

    // First the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();

    // Click the trigger button to display the modal
    fireEvent.click(getByTestId('trigger-btn'));

    // check tag name and text content of the header
    const modalContainer = queryByTestId('modal-container');
    const { tagName, textContent } = modalContainer.children[0].firstChild;
    expect(tagName).toBe('H3');
    expect(textContent).toBe(modal.page.title);
  });

  test('Modal should display body correctly', () => {
    const { getByTestId, queryByTestId } = render(<Component />);

    // First the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();

    // Click the trigger button to display the modal
    fireEvent.click(getByTestId('trigger-btn'));

    // check tag name and text content of the body
    const modalContainer = queryByTestId('modal-container');
    const { tagName, textContent } = modalContainer.children[1].firstChild;
    expect(tagName).toBe('P');
    expect(textContent).toBe(modal.page.content);
  });

  test('Modal should display footer correctly', () => {
    const { getByTestId, queryByTestId } = render(<Component />);

    // First the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();

    // Click the trigger button to display the modal
    fireEvent.click(getByTestId('trigger-btn'));

    // check tag name and text content of the body
    const modalContainer = queryByTestId('modal-container');
    const { tagName, textContent } = modalContainer.children[2].firstChild;
    const { tagName: tagName2, textContent: textContent2 } =
      modalContainer.children[2].children[1];
    expect(tagName).toBe('BUTTON');
    expect(textContent).toBe('Ok');
    expect(tagName2).toBe('BUTTON');
    expect(textContent2).toBe('Cancel');
  });

  test('Modal should be closed when clicking on footer button', () => {
    const { getByTestId, queryByTestId, queryByText } = render(<Component />);

    // First the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();

    // Click the trigger button to display the modal
    fireEvent.click(getByTestId('trigger-btn'));

    // Now it's visible
    expect(queryByTestId('modal-container')).toBeInTheDocument();

    // Close the modal by clicking on a footer button
    fireEvent.click(queryByText('Cancel'));

    //  the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();
  });
  test('Modal should be closed when clicking on footer button', () => {
    const { getByTestId, queryByTestId, getByRole } = render(<Component />);

    // First the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();

    // Click the trigger button to display the modal
    fireEvent.click(getByTestId('trigger-btn'));

    // Now it's visible
    expect(queryByTestId('modal-container')).toBeInTheDocument();

    // Close the modal by clicking on a footer button
    fireEvent.click(getByRole('closeButton'));

    //  the modal is not displayed
    expect(queryByTestId('modal-container')).toBeNull();
  });
});
