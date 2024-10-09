---
id: data-generation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# Synthetic Data Generation

For use cases that have few to no labels or ground truth data, the AutoEval platform provides the capability to synthetically generate labels. **Synthetic Data Generation** involves using a model to create data that matches what a realistic response would be and matches the underlying distribution of the data. The platform does its initial labeling through a large-language model (LLM) and over time aligns the performance of the synthetic labels to the ground truth data.

![diagram](https://github-production-user-asset-6210df.s3.amazonaws.com/129882602/371702361-5f9b7d24-6e5b-49e4-b333-4e3b0988a6ef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241008%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241008T222653Z&X-Amz-Expires=300&X-Amz-Signature=aa7efc6145bf342e37b171de84015ac00a18987785c3541474ae869854c4a007&X-Amz-SignedHeaders=host)

Instructions:
1. In the left-hand navigation, head to **Dataset Library**.
2. Select the dataset that you want to synthetically add additional labels for.
3. In the dataset view, click on **Generate Labels**.
4. Within the Generate Synthetic Labels widget, select the columns to be used to generate your labels. We recommend choosing the columns that provide predictive information to the labels you are generating.
5. Provide a few examples to be used to refine the quality of the labels you are generating. We recommend providing anywhere between 5 to 20 examples. *Tip: We recommend having a diverse set of examples for your examples for optimal performance.*
6. Enter your instructions in the **General Instructions** to guide how the LLM should create your labels. *Tip: We provide templates if you would like an example on what instructions work well*