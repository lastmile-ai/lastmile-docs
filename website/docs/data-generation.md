---
id: data-generation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# Synthetic Data Generation

For use cases that have few to no labels or ground truth data, the AutoEval platform provides the capability to synthetically generate labels. **Synthetic Data Generation** involves using a model to create data that matches what a realistic response would be and matches the underlying distribution of the data. The platform does its initial labeling through a large-language model (LLM) and over time aligns the performance of the synthetic labels to the ground truth data.

![synthetic-data#diagram](https://andrew-dev-s3.s3.amazonaws.com/synth-data-diagram.png)

### Generating Synthetic Data:
1. In the left-hand navigation, head to **Dataset Library**.
2. Select the dataset that you want to synthetically add labels for.
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
7. Click **Start Labeling** and we'll generate 16 synthetic labels for you to review and edit.
8. Within the next page of the labeling flow, carefully review and either confirm or update the label (1 or 0).
:::tip
The meaning of the label will depend on your prompt for your synthetic data generation
:::
9. After you complete verifying the 16 synthetic labels, you can do a final review in the **Review Labels** widget.
10. Clikc **Submit** to start generating synthetic labels for the rest of your dataset!

![synthetic-data#diagram](https://andrew-dev-s3.s3.amazonaws.com/temp-console-screenshot.png)