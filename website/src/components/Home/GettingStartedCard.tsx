import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { SplitPane } from "../SplitPane";
import { MarkdownRenderer } from "../MarkdownRenderer";

export interface GettingStartedCardProps {
  pythonCode: string;
  nodeCode: string;
}

export function GettingStartedCard({
  pythonCode,
  nodeCode,
}: GettingStartedCardProps) {
  const pythonMdx = "```python\n" + pythonCode + "\n```";
  const nodeMdx = "```javascript\n" + nodeCode + "\n```";

  return (
    <SplitPane
      className="getting-started-card"
      leftPaneClassName="getting-started-card-left-pane"
      rightPaneClassName="getting-started-card-right-pane"
      leftChild={
        <a href={"/getting_started"}>
          <h3>Developer quickstart</h3>
          <p>Compute your first evaluation metric within 5 minutes.</p>
        </a>
      }
      rightChild={
        <Tabs>
          <TabItem value="python" label="Python" default>
            <MarkdownRenderer mdx={pythonMdx} />
          </TabItem>
          <TabItem value="node" label="node.js">
            <MarkdownRenderer mdx={nodeMdx} />
          </TabItem>
        </Tabs>
      }
    />
  );
}
