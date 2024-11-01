---
id: platform
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# AutoEval

The AutoEval fine-tuning platform enables customization of the AlBERTa SLMs to better evaluate and measure your application's performance.

![autoeval-platform](https://andrew-dev-s3.s3.amazonaws.com/autoeval-platform.png)

## Platform Capabilities

### Synthetic Data Generation

For use cases that have few to no labels or ground truth data, the AutoEval platform provides the capability to synthetically generate labels. **Synthetic Data Generation** involves using a model to create data that matches what a realistic response would be and matches the underlying distribution of the data. The platform does its initial labeling through a large-language model (LLM) and over time aligns the performance of the synthetic labels to the ground truth data.

### Fine-tuning

Fine-tuning allows you to improve the performance of LastMile AI's models by tuning the performance to your specific data and use case. **Fine-tuning** is the process of adapting the small language models for specific tasks.

### Active Learning

**Active learning** is in which we use an algorithm (an LLM in this case) to interactively label the training data. You can continuously improve the active learning by providing additional samples of ground truth data.

Instructions:

1.
