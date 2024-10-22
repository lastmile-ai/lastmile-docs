import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { SplitPane } from "../SplitPane";

export interface GettingStartedCardProps {
  codeBlocks: {
    language: string;
    label?: string;
    code: string;
  }[];
  defaultLanguage?: string;
}

export function GettingStartedCard({
  codeBlocks,
  defaultLanguage,
}: GettingStartedCardProps) {
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
          {codeBlocks.map(({ language, label, code }) => (
            <TabItem
              value={label ?? language}
              label={label ?? language}
              key={label ?? language}
              default={defaultLanguage === language}
            >
              <CodeBlock language={language}>{code}</CodeBlock>
            </TabItem>
          ))}
        </Tabs>
      }
    />
  );
}
