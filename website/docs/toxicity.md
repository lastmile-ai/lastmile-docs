---
id: toxicity
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# Toxicity

A 400M parameter state-of-the-art, encoder based model for calcuating the factual consistency of the generated answer against the provided context.

### Model Description



### Performance

|  |  |  
| --- | --- | 
| [Wiki Toxic](https://huggingface.co/datasets/OxAISH-AL-LLM/wiki_toxic) | 79.6% | 
| Latency | < 2ms for 1000 tokens | 

### Example Use

```python
import json
import oså
from typing import Any, Generator
import pandas as pd
from lastmile_auto_eval import (
    EvaluationMetric,
    EvaluationResult,
    evaluate as auto_evaluate,
    stream_evaluate,
)
from IPython.display import display

result: EvaluationResult = auto_evaluate(
    dataframe=evaluation_data,
    metrics=[
        EvaluationMetric.P_FAITHFUL,
    ],
    lastmile_api_token=os.getenv("LASTMILE_API_TOKEN"),
)
```
