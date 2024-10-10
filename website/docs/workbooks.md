---
id: workbooks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# AI Workbooks

Workbooks are interactive documents that combine responses from generative AI models to create unique AI-powered applications and workflows. A workbook enables you to string together various generative AI models to build powerful applications. In a workbook, you can connect text, image, and audio models in a single environment. 

## Create a Workbook
You can create a new workbook directly from the left navigation bar or from the Workbooks page. 
1. Click on **Workbooks** in the left-hand navigation
2. Click on **New workbook** at the top-right of the Workbooks page

### Looking for Inspiration?
Try one of our Templates to get started with you AI Workbook. Examples include: `GPT4 Coding Assistant`, `Summarizing Interview Audio`, `Image Generator`, `Summarizing Standups`, and much more.

![create_workbook#screenshot](https://andrew-dev-s3.s3.amazonaws.com/lastmileai.dev_workbooks(standard-screenshot)(create).png)

## Workbook Parameters
Parameterizing your AI workbook allows you to create dynamic, reusable AI templates. This feature is similar to parameterizing Jupyter notebooks and offers a range of benefits, including increased efficiency and consistency in your workflows. Parameterization is a powerful tool for managing and optimizing your AI workflows. 

Here are our favorite AI Templates to get you started on parameterization: 
* [Summarize Interview Audio](https://lastmileai.dev/workbooks/cljg34xna0076r102nepuqbex)
* [GPT4 Coding Assistant](https://lastmileai.dev/workbooks/cllu8zsxz001upg0tljmlfo88)
* [Customer Notes by GPT4](https://lastmileai.dev/workbooks/cllx5kt2s01fhpgupk0h9cvqz)
* [Stable Diffusion Image Generation](https://lastmileai.dev/workbooks/cllpe87cn0031pgnq5muhcpvr)

### What are parameters?
Parameters are variables that you can define and pass into any cell within your workbook. You can set both **global parameters** and **local parameters**. 

For example, you can define parameters such as `language` or `product` in a cell like this with the handlebars syntax as shown below:
| "Write a LinkedIn DM in \{\{language\}\} as a sales rep selling \{\{product\}\}."

#### Global Parameters 

You can set global parameters (workbook parameters) for your entire workbook. Click on '{}' on the top of your workbook and set your global parameters that can be used in any cell of the workbook. 

#### Local Parameters

To change the parameters, open 'Parameters {}'. You can then reuse this cell and update the `language` and `product` parameters to different values as needed.

You can reference parameters in the cell input and also the cell's system prompt (in Cell Settings). 

**Note: Local parameters will override the global parameters if they have the same name.**

#### Referencing Output from One Cell in Another
In addition to defining and passing parameters within a single cell, you can also reference the output from one cell in another cell. This allows you to create complex, interconnected workflows within your workbook.

For example, you might have a cell that generates a LinkedIn DM, and another cell that rewords that DM and translates it into a different language. You could set this up using parameters and cell references like this:

| “Reword ‘\{\{gpt4_cell_1.output\}\}’ in the form of ‘\{\{shakespeare_cell.output\}\}’, and translate to \{\{language\}\}”.

### Running a Workbook or Cells

You have two options for running cells that reference other cells:

* **Run a Cell (execute with dependencies)**: This will run the selected cell and all its dependencies, ensuring that all necessary data and outputs are up-to-date.
* **Run All:** This will execute the entire workbook, running all cells and handling dependencies.

![params_workbook#screenshot](https://andrew-dev-s3.s3.amazonaws.com/lastmileai.dev_workbooks(params).png)

## Manage a Workbook

### Viewing all your Workbooks
You can view all your workbooks from the Workbooks page. 

### Delete a Workbook
In order to delete a workbook, go to the workbook and click '...' next to the Share button which has the option to Delete the workbook. 

![deleting_workbook#screenshot](https://andrew-dev-s3.s3.amazonaws.com/lastmileai.dev_workbooks(standard-screenshot)(delete).png)

## Share & Collaborate

### Share a Workbook
You can change the sharing settings of the workbook by clicking the Share button in the top right-hand corner.

* **Private** - Your workbook starts out as private which means only you have access to view and edit.
* **Public** - When you make your workbook public, anyone with the link to your workbook will be able to view it. Only you will be able to edit the workbook.
* **Organization** - You can share your workbook with members of an organization. 

![sharing_workbook#screenshot](https://andrew-dev-s3.s3.amazonaws.com/lastmileai.dev_workbooks(share).png)

### Comment on Workbooks
You can comment on workbooks using the right side comment bar. Comments can be especially helpful for notebooks that have public view access.  

![commenting_workbook#screenshot](https://andrew-dev-s3.s3.amazonaws.com/lastmileai.dev_workbooks(standard-screenshot)(comment).png)
