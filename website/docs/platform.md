---
id: platform
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# AutoEval Platform

The AutoEval fine-tuning platform enables customization of the AlBERTa SLMs to better evaluate and measure your application's performance.

![diagram](https://github-production-user-asset-6210df.s3.amazonaws.com/129882602/371702361-5f9b7d24-6e5b-49e4-b333-4e3b0988a6ef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241008%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241008T222653Z&X-Amz-Expires=300&X-Amz-Signature=aa7efc6145bf342e37b171de84015ac00a18987785c3541474ae869854c4a007&X-Amz-SignedHeaders=host)
## Platform Capabilities

### Synthetic Data Generation
For use cases that have few to no labels or ground truth data, the AutoEval platform provides the capability to synthetically generate labels. **Synthetic Data Generation** involves using a model to create data that matches what a realistic response would be and matches the underlying distribution of the data. The platform does its initial labeling through a large-language model (LLM) and over time aligns the performance of the synthetic labels to the ground truth data.

### Fine-tuning
Fine-tuning allows you to improve the performance of LastMile AI's models by tuning the performance to your specific data and use case. **Fine-tuning** is the process of adapting the small language models for specific tasks.


### Active Learning
**Active learning** is in which we use an algorithm (an LLM in this case) to interactively label the training data. You can continuously improve the active learning by providing additional samples of ground truth data.

Instructions:
1. 