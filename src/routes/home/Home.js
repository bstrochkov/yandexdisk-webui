/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NoSSR from 'react-no-ssr';


class Home extends React.Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       title: PropTypes.string.isRequired,
  //       link: PropTypes.string.isRequired,
  //       content: PropTypes.string,
  //     }),
  //   ).isRequired,
  // };
  
  onChange(currentNode, selectedNodes) {
    console.log("path::", currentNode.path);
  };
  
  assignObjectPaths(obj, stack) {
    Object.keys(obj).forEach(k => {
      const node = obj[k];
      if (typeof node === "object") {
        node.path = stack ? `${stack}.${k}` : k;
        this.assignObjectPaths(node, node.path);
      }
    });
  };
  
  renderFileManager() {
    if (!process.env.BROWSER) {
      return undefined;
    }
    const { FileManager, FileNavigator } = require('@opuscapita/react-filemanager');
    const connectorNodeV1 = require('@opuscapita/react-filemanager-connector-node-v1');
    const apiOptions = {
      ...connectorNodeV1.apiOptions,
      apiRoot: '' // Or you local Server Node V1 installation .
    }
    return (
      <NoSSR>
        <FileManager>
          <FileNavigator
            id="filemanager-1"
            api={connectorNodeV1.api}
            apiOptions={apiOptions}
            capabilities={connectorNodeV1.capabilities}
            listViewLayout={connectorNodeV1.listViewLayout}
            viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
          />
        </FileManager>
      </NoSSR>
    );
  }

  render() {
    return (
      <Container>
        <Card className="my-4">
          <Card.Header>Directories</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="targetFolder">
                <Form.Label>Folder location</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              {this.renderFileManager()}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withStyles(s)(Home);
