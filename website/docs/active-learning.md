---
id: active-learning
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# Active Learning

**Active learning** is in which we use an algorithm (an LLM in this case) to interactively label the training data. You can continuously improve the active learning by providing additional samples of ground truth data.

![active-learning#diagram](https://andrew-dev-s3.s3.amazonaws.com/Active-Learning.png)

### Active Learning for Datasets:
1. In the left-hand navigation, head to **Dataset Library**.
2. Select the dataset that you want to add labels for.
3. In the dataset view, click on **Generate Labels**.
4. Within the Generate Synthetic Labels widget, select the columns to be used to generate your labels. We recommend choosing the columns that provide predictive information to the labels you are generating.
5. Provide a few examples to be used to refine the quality of the labels you are generating. We recommend providing anywhere between 5 to 20 examples. 
:::tip 
We recommend having a diverse set of examples for your examples for optimal performance.
:::
6. Enter your instructions in the **General Instructions** to guide how the LLM should create your labels. 
:::tip
We provide templates if you would like an example on what instructions work well.
:::