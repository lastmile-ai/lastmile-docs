---
id: app_home
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

import { Card } from '@site/src/components/Card';
import { Grid } from '@site/src/components/Grid';
import { SplitPane } from '@site/src/components/SplitPane';
import { GettingStartedCard } from '@site/src/components/Home/GettingStartedCard';

# AutoEval developer platform

LastMile is the full-stack developer platform to debug, evaluate and improve LLM applications. We make it easy to fine-tune custom evaluators, set up guardrails & monitor app performance.

<GettingStartedCard
  defaultLanguage="python"
  codeBlocks={
    [
      {
        language: "python",
        code: `from lastmile import LastMile;
        LastMile.eval("Hello world")`
      },
      {
        language: "javascript",
        label: "node.js",
        code: `const { LastMile } = require('lastmile');
        LastMile.eval("Hello world");`
      }
    ]
  }
/>

## Meet alBERTa 🍁

alBERTa is a family of small language models designed for evaluation. They are optimized to be:

- **small** -- 400M parameter entailment model
- **fast** -- can run inference on CPU in < 300ms
- **customizable** -- fine-tune for custom evaluation tasks

<Grid className="custom-grid">
  <Card
    href="/alberta"
    title="alBERTa-512 🍁"
    description="2048 token context, specialized for evaluation tasks (like faithfulness), and gives a numeric 0->1 score."
    backgroundColor="#F5F5F5"
    className="custom-card"
  />
  <Card
    href="/alberta"
    title="alBERTa-LC-8k 🍁"
    description="Long-context window variant that can scale to 128k+ tokens using a scaled dot-product attention layer"
    backgroundColor="#F5F5F5"
    className="custom-card"
  />
</Grid>

### Out-of-the-box metrics

Batteries-included evaluation metrics covering common AI application types, such as RAG and multi-agent compound AI systems.

<Grid className="custom-grid">
  <Card
    href="/metrics"
    title="Faithfulness"
    description="Measures how adherent or faithful an LLM response is to the provided context. Often used for hallucination detection."
    backgroundColor="#F1F1F1"
    className="custom-card"
  />
  <Card
    href="/metrics"
    title="Semantic Similarity"
    description="Measures semantic similarity between two strings. Often used for context relevance, or input/output relevance, or similarity between a response and ground truth."
    backgroundColor="#F1F1F1"
    className="custom-card"
  />
  <Card
    href="/metrics"
    title="Summarization Quality"
    description="Quantify the quality of a summarization response."
    backgroundColor="#F1F1F1"
    className="custom-card"
  />
  <Card
    href="/metrics"
    title="Toxicity"
    description="Quantify the toxicity level in an LLM response."
    backgroundColor="#F1F1F1"
    className="custom-card"
  />
  <Card
    href="/metrics"
    title="More"
    description="Explore other metrics available in AutoEval, or keep reading to design your own metric."
    backgroundColor="#F7F7F7"
    className="custom-card"
  />
</Grid>

## Design your own metric

Use the fine-tuning service to design your own evaluators that represent custom criteria for your app quality.

<Grid className="custom-grid">
  <Card
    href="/datasets"
    title="Datasets"
    description="Upload and manage application data for running and training evals"
    backgroundColor="#FBF6F7"
    className="custom-card"
  />
  <Card
    href="/llm_judge"
    title="LLM Judge"
    description="Generate high-quality labels for your data using a mixture of LLM Judge with human-in-the-loop"
    backgroundColor="#F2F9FF"
    className="custom-card"
  />
  <Card
    href="/fine_tune"
    title="Fine-tune"
    description="Use the AutoEval fine-tuning service to develop custom metrics for your application."
    backgroundColor="#EFFFF4"
    className="custom-card"
  />
  <Card
    href="/serve"
    title="Run Evals"
    description="Compute metrics by running high-performance inference on a prebuilt or fine-tuned model."
    backgroundColor="#F7EFFF"
    className="custom-card"
  />
</Grid>

## Explore our guides

<Grid className="custom-grid">
  <Card
    href="/retrieval_systems"
    title="Retrieval systems"
    description="Evaluate a RAG application for hallucination, relevance and a custom brand tone metric."
    className="custom-card"
  />
  <Card
    href="/multi_agent"
    title="Multi-agent applications"
    description="Evaluate end-to-end and intermediate step metrics for a compound AI system."
    className="custom-card"
  />
  <Card
    href="/realtime_guardrails"
    title="Real-time guardrails"
    description="Use alBERTa 🍁 model inference for real-time use-cases, like guardrails."
    className="custom-card"
  />
</Grid>
