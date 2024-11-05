---
id: autoeval-intro
title: "Introduction"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

Testing is the most important step in both LLM application development and monitoring it's behavior in production. In Machine Learning and Artificial Intelligence, testing is referred to by different names depending on _when_ and _how_ you test. When testing an LLM application during development, the process is often referred to as **Evaluation**. When testing an LLM application's behavior during production (typically for an real-time/online use case), the testing is referred to as **Guardrails**. We'll cover both of these in more depth.

## Evaluation

**Evaluation** is the testing and assessment of how well the LLM is performing for the task it was designed to solve.

For retrieval augmented generation (RAG) chatbots, developers will evaluate _how well does the chatbot answer questions_. Given the wide array of capabilities for LLMs, the process of evaluating it's performance has become significantly more difficult than non-LLM models of the past. [OpenAI releases benchmarks (evaluations)](https://github.com/openai/simple-evals?tab=readme-ov-file#benchmark-results) for their models and they include measuring their model's performance for `question answers`, `math`, `reasoning`, `multitask language understanding`, etc.

Two popular approaches to evaluate these LLM applications matching their flexibility with an equally flexible evalation is **human-in-the-loop** and **LLM-as-a-judge**. Human-in-the-loop relies on subject matter experts to label and verify whether the LLM application is correct. LLM-as-a-judge uses either the same LLM or another LLM to evaluate the performance of the application. Both approaches have their advantages (flexible) and shortcomings (cost and time).

**LastMile AI** combines the advantages of these approaches with a few other traditional ML techniques (**active learning**, **synthetic data generation**, and **fine-tuning**) to provide the best-in-class evaluators.

## Guardrails

**Guardrails** is the testing and assessment of the quality of the LLM application's results in a live or production setting.

A general rule of thumb is _Everything is harder with live data and in production_. Guardrails act as the quality control for an LLM returning results in real-time.

Considerations for whether a guardrail can be used for an LLM application include:

1. **Latency** - can a guardrail give results in milliseconds without negatively impacting the user experience?
2. **Consistency** - is the guardrail dependable or will it give false positives or false negatives?
3. **Scalability** - can the guardrail scale for spikes in user traffic?

**LastMile AI** provides the only low-latency fine-tuned guardrails that can be used for production LLM applications.
