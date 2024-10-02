---
id: autoeval-platform
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# The AutoEval Platform

LastMile AI's AutoEval Platform enables companies to evaluate and measure the quality of responses from their Large-Language Models (LLMs) and Retrieval-Augmented Generation (RAG) applications. The AutoEval Platform uses Small Language Models (SLMs) with machine learning techniques in the platform to accurately evaluate and measure the performance of LLMs.

### SLMs

The AlBERTa Small Language Models (SLMs) are built from the ground up to evaluate and detect inaccuracies and hallucinations. These models can be fine-tuned to *measure correctness* for what *correct* means for your specific use case and application. 
##### AlBERTa-512
Description: 
Context Length: 512 token context
Optimized Tasks: *Detecting inaccuracies, Detecting hallucinations, and Measuring Correctness*

##### AlBERTa-LC-8k
Description: 
Context Length: 8192 token context
Optimized Tasks: *Detecting inaccuracies, Detecting hallucinations, and Measuring Correctness*

### Platform

The AutoEval fine-tuning platform enables customization of the AlBERTa SLMs to better evaluate and measure your application's performance.

![diagram](https://github.com/user-attachments/assets/5f9b7d24-6e5b-49e4-b333-4e3b0988a6ef)
#### Platform Capabilities

##### 1. Synthetic Data Generation
For use cases that have few to no labels or ground truth data, the AutoEval platform provides the capability to synthetically generate labels. **Synthetic Data Generation** involves using a model to create data that matches what a realistic response would be and matches the underlying distribution of the data. The platform does its initial labeling through a large-language model (LLM) and over time aligns the performance of the synthetic labels to the ground truth data.

##### 2. Fine-tuning
Fine-tuning allows you to improve the performance of LastMile AI's models by tuning the performance to your specific data and use case. **Fine-tuning** is the process of adapting the small language models for specific tasks.

##### 3. Active Learning
**Active learning** is in which we use an algorithm (an LLM in this case) to interactively label the training data. You can continuously improve the active learning by providing additional samples of ground truth data.

##### 4. Deployment
The AutoEval platform, AlBERTa models, and the fine-tuned models can be either hosted on the LastMile AI cloud or within your VPC. 
