import React, { useState } from 'react';

import PortletView from '../components/Portlet';
import Modal from '../components/Modal';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import Button from '../components/Button';
import fake_data from '../fake-data';
const ModalPage = () => {
  const [modalOpen, setModalOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggle = (arg) => (e) =>
    setModalOpen({ ...modalOpen, [arg]: !modalOpen[arg] });

  const {
    pages: { modal },
  } = fake_data;
  return (
    <>
      <PortletView
        title={modal.page.title}
        content={
          <>
            <Button $primary onClick={toggle(1)}>
              {modal.page.triggerBtn}
            </Button>

            <Modal onToggleModal={toggle(1)} show={modalOpen[1]}>
              <Modal.Header title={modal.page.title} />
              <Modal.Body>
                <h2>{modal.body.content_one}</h2>
                <p>{modal.body.content_two}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button $primary label="Ok" onClick={toggle(1)} />
                <Button $danger label="Cancel" onClick={toggle(1)} />
              </Modal.Footer>
            </Modal>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
              <Button $primary onClick={toggle}>
                Open Modal
              </Button>

              <Modal onToggleModal={toggle} show={modalOpen}>
                <Modal.Header title={modal.page.title} />
                <Modal.Body>
                  <h2>{modal.body.content_one}</h2>
                  <p>{modal.body.content_two}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button $primary label="Ok" onClick={toggle} />
                  <Button $danger label="Cancel" onClick={toggle} />
                </Modal.Footer>
              </Modal>
        `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title={modal.page.title2}
        content={
          <>
            <Button $primary onClick={toggle(2)}>
              {modal.page.triggerBtn}
            </Button>

            <Modal onToggleModal={toggle(2)} show={modalOpen[2]} resizable>
              <Modal.Header title={modal.page.title} />
              <Modal.Body>
                <h2>{modal.body.content_one}</h2>
                <p>{modal.body.content_two}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button $primary label="Ok" onClick={toggle(2)} />
                <Button $danger label="Cancel" onClick={toggle(2)} />
              </Modal.Footer>
            </Modal>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
           <Button $primary onClick={toggle}>
              Open Modal
            </Button>

            <Modal onToggleModal={toggle} show={modalOpen} resizable>
              <Modal.Header title={modal.page.title} />
              <Modal.Body>
                <h2>{modal.body.content_one}</h2>
                <p>{modal.body.content_two}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button $primary label="Ok" onClick={toggle} />
                <Button $danger label="Cancel" onClick={toggle} />
              </Modal.Footer>
            </Modal>
        `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title={modal.page.title3}
        content={
          <>
            <Button $primary onClick={toggle(3)}>
              {modal.page.triggerBtn}
            </Button>

            <Modal onToggleModal={toggle(3)} show={modalOpen[3]} draggable>
              <Modal.Header title={modal.page.title3} />
              <Modal.Body>
                <h2>{modal.body.content_one}</h2>
                <p>{modal.body.content_two}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button $primary label="Ok" onClick={toggle(3)} />
                <Button $danger label="Cancel" onClick={toggle(3)} />
              </Modal.Footer>
            </Modal>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
            <Button $primary onClick={toggle}>
              Open Modal
            </Button>

            <Modal onToggleModal={toggle} show={modalOpen} draggable>
              <Modal.Header title={modal.page.title} />
              <Modal.Body>
                <h2>{modal.body.content_one}</h2>
                <p>{modal.body.content_two}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button $primary label="Ok" onClick={toggle} />
                <Button $danger label="Cancel" onClick={toggle} />
              </Modal.Footer>
            </Modal>
        `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title={modal.page.title4}
        content={
          <>
            <Button $primary onClick={toggle(4)}>
              {modal.page.triggerBtn}
            </Button>

            <Modal
              onToggleModal={toggle(4)}
              show={modalOpen[4]}
              draggable
              resizable
              fullscreen
            >
              <Modal.Header title={modal.page.title} />
              <Modal.Body>
                <h2>{modal.body.content_one}</h2>
                <p>{modal.body.content_two}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button $primary label="Ok" onClick={toggle(4)} />
                <Button $danger label="Cancel" onClick={toggle(4)} />
              </Modal.Footer>
            </Modal>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
           <Button $primary onClick={toggle}>
              Open Modal
            </Button>

            <Modal onToggleModal={toggle} show={modalOpen} resizable draggable fullscreen>
              <Modal.Header title={modal.page.title} />
              <Modal.Body>
                <h2>{modal.body.content_one}</h2>
                <p>{modal.body.content_two}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button $primary label="Ok" onClick={toggle} />
                <Button $danger label="Cancel" onClick={toggle} />
              </Modal.Footer>
            </Modal>
        `}
            </PrismCode>
          </Toggle>
        }
      />
    </>
  );
};

export default ModalPage;
