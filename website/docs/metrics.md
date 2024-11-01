---
id: metrics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/tabConstants';

# Metrics

Evaluation Metrics are the key to unlocking development velocity and safety in productionizing LLM applications. Metrics measure the performance of your LLM (or Retrieval Augmented Generation - RAG) applications. LastMile AI's metrics include `hallucination detection`, `summarization`, `relevance`, `q/a`, `semantic similarity`, `exact match`, `bleu`, `rouge`, and `toxicity`.

### Hallucination Detection (Faithfulness)

A specialized LastMile evaluator that measures the faithfulness of an LLM-generated response to the provided context in a RAG system. It aims to detect hallucination, which occurs when LLMs generate unsupported information despite being given context in the prompt. The pscore answers: _“To what extent is the generated answer faithful to the provided context without introducing unsupported information?”_

Inputs:

- User's question: The input query to the RAG application.
- Retrieved context: The context or information retrieved from a vector DB based on the user question
- LLM-generated response: The output produced by the LLM using the retrieved context.

The hallucination detection evaluator outputs a score ranging from 0 to 1. Higher scores indicating that the response is more faithful to the context. Lower scores suggest that the model might have included information not present in the context. [Learn more](https://blog.lastmileai.dev/harder-better-faster-stronger-llm-hallucination-detection-for-real-world-rag-part-i-949248f0ad94).

**Example Code Snippet**

```python
# To be updated with updated code snippet
user_query = [
    "What is Albert Einstein famous for?",
]

context_retrieved = [
    """Albert Einstein was a German-born theoretical physicist who developed
    the theory of relativity, one of the two pillars of modern physics. His
    work is also known for its influence on the philosophy of science. He is
    best known to the general public for his mass-energy equivalence formula
    E = mc², which has been dubbed 'the world's most famous equation'. He
    received the 1921 Nobel Prize in Physics 'for his services to theoretical
    physics, and especially for his discovery of the law of the photoelectric
    effect', a pivotal step in the development of quantum theory."""
]

llm_generated_response = [
    "Albert Einstein is famous for the formula E = mc² and Brownian motion.",
]

# Calculate faithful
faithful_result = get_rag_eval_scores(
    user_query,
    context_retrieved,
    llm_generated_response,
    api_token=os.getenv("LASTMILE_API_TOKEN"),
)

# Print results
display(pd.DataFrame({
    "LLM Generated Response": llm_generated_response,
    "Context Retrieved": context_retrieved,
    "User Query": user_query,
    "Faithfulness": faithful_result['p_faithful']
}))
```

<img width="1000" alt="faithful" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/912eecca-fcd2-41e9-871b-09a36a5f1258"/>

The faithfulness score of 0.66 suggests that the LLM-generated response is only partially faithful to the retrieved context. While it correctly mentions Einstein's famous equation, E = mc², it also includes information about Brownian motion, which is not present in the context. The inclusion of this additional information likely contributed to the lower score, indicating that the LLM relied on its own knowledge beyond the given context.

### Summarization

The Summarization evaluator measures the quality of an LLM-generated summary compared to the source document. It aims to assess how well the summary captures the essential information and main ideas of the source document. The summarization score answers: _"To what extent does the generated summary capture the essential information from the source document?"_

Inputs:

- Source document: The full text that is being summarized.
- LLM-generated summary: The summary produced by the LLM based on the source document.

The Summarization evaluator outputs a score ranging from 0 to 1. Higher scores indicate that the summary more effectively captures the essential information from the source document. Lower scores suggest that the summary may be missing key points or including irrelevant information.

**Example Code Snippet**

```python
source_document = [
    """Albert Einstein was a German-born theoretical physicist who developed
    the theory of relativity, one of the two pillars of modern physics. His work
    is also known for its influence on the philosophy of science. He is best known
    to the general public for his mass-energy equivalence formula E = mc²,
    which has been dubbed 'the world's most famous equation'. Einstein received
    the 1921 Nobel Prize in Physics 'for his services to theoretical physics, and
    especially for his discovery of the law of the photoelectric effect', a
    pivotal step in the development of quantum theory. In his later years,
    Einstein focused on unified field theory and became increasingly isolated
    from the mainstream of   modern physics."""
]

llm_generated_summary = [
    """Albert Einstein, a German-born physicist, developed the theory of
    relativity and the famous equation E = mc². He won the 1921 Nobel Prize
    in Physics for his work on the photoelectric effect, contributing to
    quantum theory. Later, he worked on unified field theory."""
]

# Calculate Summarization Score
summarization_score = lm_eval_text.calculate_summarization_score(
    llm_generated_summary,
    source_document,
    model_name="gpt-3.5-turbo"
)

# Print results
display(pd.DataFrame({
    "Source Document": source_document,
    "LLM Generated Summary": llm_generated_summary,
    "Summarization Score": summarization_score
}))
```

<img width="1000" alt="summarization" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/57bf8fe1-8d47-43f4-b175-91e7bf338056"/>

The summarization score of 0.88 indicates the summary effectively captures key points about Einstein, including his German origin, development of relativity theory, E = mc² equation, 1921 Nobel Prize for the photoelectric effect, and work on unified field theory. It successfully condenses essential information while maintaining accuracy. The score isn't perfect, likely due to omitting Einstein's influence on philosophy of science and his later isolation from mainstream physics.

### Relevance

The Relevance evaluator measures how well an LLM-generated response aligns with an expected output (ground truth). It aims to assess the topical relevance and contextual alignment of the generated response. The relevance score answers: _"To what extent does the generated response align with the topic and content of the expected output?"_

Inputs:

- LLM-generated response: The response produced by the LLM.
- Expected output (ground truth): The ideal or correct response to compare against.

The Relevance Score evaluator outputs a score ranging from 0 to 1. Higher scores indicate that the LLM-generated response is more relevant and aligned with the expected output. Lower scores suggest that the response may be off-topic or misaligned with the desired content.

**Example Code Snippet**

```python
llm_generated_response = [
    """Albert Einstein revolutionized physics with his theory of relativity.
    He proposed that space and time are interconnected and that the speed of
    light is constant in all reference frames. His famous equation E = mc²
    showed that mass and energy are equivalent. Einstein's work on the
    photoelectric effect contributed to the development of quantum theory,
    earning him the Nobel Prize in Physics."""
]

expected_output = [
    """Albert Einstein transformed our understanding of the universe with his
    groundbreaking theories. His special and general theories of relativity
    redefined concepts of space, time, and gravity. Einstein's equation E = mc²
    revealed the fundamental relationship between mass and energy. His
    explanation of the photoelectric effect was crucial to the emergence of
    quantum physics, for which he received the Nobel Prize. Throughout his career,
    Einstein's innovative thinking and scientific contributions reshaped the
    field of physics."""
]

# Calculate Relevance Score
relevance_score = lm_eval_text.calculate_relevance_score(
    llm_generated_response,
    expected_output,
    model_name="gpt-3.5-turbo"
)

# Print results
display(pd.DataFrame({
    "LLM Generated Response": llm_generated_response,
    "Expected Output": expected_output,
    "Relevance Score": relevance_score
}))
```

<img width="1000" alt="relevance" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/66cb897e-8063-4054-a9dd-3bcc9036b029"/>

The relevance score of 0.94 indicates high alignment between the LLM-generated response and the expected output. Both texts cover Einstein's key contributions: the theory of relativity, E = mc², and the photoelectric effect. The score isn't perfect, as the LLM response omits mentions of general relativity and Einstein's broader impact on physics. However, it adds relevant details about light's constant speed. Overall, the high score reflects strong topical relevance and accurate conveyance of Einstein's main scientific achievements.

### Q/A on Retrieved Data

The Q/A on Retrieved Data evaluator is a binary measure of whether an LLM-generated response answers a user query based on the retrieved context. It aims to evaluate the accuracy and completeness of the answer in relation to the provided information. The Q/A on Retrieved Data score answers: _"Does the LLM-generated response correctly and completely answer the user query based on the retrieved context?"_

Inputs:

- User's question: The input query to the RAG application.
- Retrieved context: The context or information retrieved from a vector DB based on the user question
- LLM-generated response: The output produced by the LLM using the retrieved context.

The Q/A on Retrieved Data evaluator outputs a binary score. A score of 1 indicates the answer is correct and complete based on the retrieved context. A score of 0 means the answer is incorrect, incomplete, or includes information not present in the retrieved context.

**Example Code Snippet**

```python
user_query = [
    "What did Einstein win the Nobel Prize for?"
]

retrieved_context = [
    """Albert Einstein received the Nobel Prize in Physics in 1921. However,
    contrary to popular belief, he didn't receive it for his theories of relativity.
    Einstein was awarded the Nobel Prize 'for his services to Theoretical Physics,
    and especially for his discovery of the law of the photoelectric effect'."""
]

llm_generated_response = [
    """Einstein won the Nobel Prize in Physics in 1921 for his discovery
    of the law of the photoelectric effect, not for his theories of relativity as
     is often mistakenly believed."""
]

# Calculate Q/A on Retrieved Data Score
qa_score = lm_eval_text.calculate_qa_score(
    llm_generated_response,
    retrieved_context,
    user_query,
    model_name="gpt-3.5-turbo"
)

# Print results
display(pd.DataFrame({
    "User Query": user_query,
    "Retrieved Context": retrieved_context,
    "LLM Generated Response": llm_generated_response,
    "Q/A on Retrieved Data Score": qa_score
}))
```

<img width="1000" alt="Screen Shot 2024-07-05 at 3 27 59 PM" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/b0a15efb-d6c7-4600-9216-e85f992d4b57"/>

The Q/A on Retrieved Data score of 1 indicates the LLM response fully and accurately answers the query based on the retrieved context. It correctly identifies Einstein's Nobel Prize reason and year, notes it wasn't for relativity, and doesn't add information beyond the context, demonstrating high fidelity to the provided data.

## Output Quality Evaluators

Output Quality Evaluators assess how closely LLM-generated text matches reference text or meets specific criteria. These metrics include Semantic Similarity for meaning comparison, Exact Match for perfect string matching, BLEU for precision-based similarity, and ROUGE for recall-oriented summary evaluation.

### Semantic Similarity

The Semantic Similarity evaluator measures how similar two strings are, regardless of their actual meaning. It assesses the textual closeness of an LLM-generated response to a reference text. The Semantic Similarity evaluator answers: _"How textually similar is the LLM-generated response to the reference text, irrespective of their meaning?"_

Inputs:

- LLM-generated response: The response produced by the LLM.
- Reference text: The text to compare against.

The Semantic Similarity evaluator outputs a score ranging from 0 to 1. Higher scores indicate greater similarity between the strings, while lower scores suggest more differences.

**PLEASE NOTE:** This metric can lead to misinterpretations if used in isolation. For example, the strings "The sky is blue" and "The sky is NOT blue" would score high in semantic similarity, despite having opposite meanings. Therefore, this metric should be used in conjunction with other metrics for a more comprehensive evaluation like hallucination detection (faithfulness).

**Example Code Snippet**

```python
llm_generated_response = [
    """Einstein's theory of relativity was widely accepted by
    the scientific community."""
]

reference_text = [
    """Einstein's theory of relativity was not widely accepted by
    the scientific community."""
]

# Calculate Semantic Similarity Score
semantic_similarity_score = lm_eval_text.calculate_custom_llm_metric_example_semantic_similarity(
    llm_generated_response,
    reference_text,
    model_name="gpt-3.5-turbo"
)

# Print results
display(pd.DataFrame({
    "LLM Generated Response": llm_generated_response,
    "Reference Text": reference_text,
    "Semantic Similarity Score": semantic_similarity_score
}))
```

<img width="1000" alt="Screen Shot 2024-07-05 at 4 47 32 PM" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/4cc5638f-88b2-4dc7-8e4a-be584df1383e"/>

The Semantic Similarity Score of 0.80 shows high textual similarity despite opposite meanings. The strings differ only by "not", reversing the claim about Einstein's theory reception. This high score highlights a key limitation: the metric doesn't detect meaning differences or contradictions. It emphasizes the need to use this metric alongside others that can assess semantic accuracy and factual correctness.

### Exact Match

The Exact Match evaluator assesses whether an LLM-generated response is identical to a reference text. It provides a binary score indicating perfect string matching. The Exact Match Score answers: _"Is the LLM-generated response exactly the same as the reference text?"_

Inputs:

- LLM-generated response: The response produced by the LLM.
- Reference text: The text to compare against.

The Exact Match evaluator outputs a binary score: 1 if the strings match exactly, and 0 if there's any difference. This metric is particularly useful when the LLM's temperature is set to 0, ensuring consistent outputs for identical inputs.

**Example Code Snippet**

```python
llm_generated_response = [
    "E = mc^2 is Einstein's famous equation relating energy and mass."
]

reference_text = [
    "E = mc^2 is Einstein's famous equation relating energy and mass."
]

# Calculate Exact Match Score
exact_match_score = lm_eval_text.calculate_exact_match_score(
    llm_generated_response,
    reference_text
)

# Print results
display(pd.DataFrame({
    "LLM Generated Response": llm_generated_response,
    "Reference Text": reference_text,
    "Exact Match Score": exact_match_score
}))

```

<img width="820" alt="Screen Shot 2024-07-05 at 4 55 48 PM" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/0680fb06-0271-4683-ba22-2818b9196712"/>

The Exact Match Score of 1 indicates the LLM-generated response perfectly matches the reference text. Both strings identically describe Einstein's famous equation, demonstrating the metric's ability to detect perfect matches. This score is useful for verifying precise reproduction of expected outputs.

### BLEU

The BLEU (Bilingual Evaluation Understudy) score measures how similar a machine-generated text is to a reference text. It does this by comparing overlapping words and phrases, including sequences of words called n-grams. The BLEU Score answers: _"How closely does the LLM-generated text match the reference text in terms of word and phrase usage?"_ [Read more about BLEU.](https://towardsdatascience.com/foundations-of-nlp-explained-bleu-score-and-wer-metrics-1a5ba06d812b)

Inputs:

- LLM-generated text: The text produced by the LLM.
- Reference text: The text to compare against.

BLEU scores ranges from 0 to 1. Higher scores mean the generated text uses more of the same words and phrases as the reference text.

**Example Code Snippet**

```python
llm_generated_text = [
    """Einstein developed the theory of relativity, which changed
    our understanding of space and time."""
]

reference_text = [
    """Einstein created the theory of relativity that revolutionized
    our view of space and time."""
]

# Calculate BLEU Score
bleu_score = lm_eval_text.calculate_bleu_score(
    llm_generated_text,
    reference_text
)

# Print results
display(pd.DataFrame({
    "LLM Generated Text": llm_generated_text,
    "Reference Text": reference_text,
    "BLEU Score": bleu_score
}))

```

<img width="725" alt="Screen Shot 2024-07-05 at 5 04 01 PM" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/2f6a0dae-4bde-431c-aaac-2d0716ca5699"/>

The BLEU Score of 0.4 shows moderate similarity between the texts. Both convey the core idea about Einstein's theory of relativity, but differ in specific wording (e.g., "developed" vs. "created"). This score reflects BLEU's sensitivity to exact word matches and order, highlighting why it should be used alongside other metrics for comprehensive evaluation.

### ROUGE

The ROUGE (Recall-Oriented Understudy for Gisting Evaluation) score measures how well a machine-generated summary captures the content of a reference summary. Unlike BLEU, which focuses on precision, ROUGE emphasizes recall, assessing how much of the reference content is present in the generated text. The ROUGE Score answers: _"How well does the LLM-generated summary cover the key information from the reference summary?"_ [Read more about ROUGE.](https://medium.com/nlplanet/two-minutes-nlp-learn-the-rouge-metric-by-examples-f179cc285499)

Inputs:

- LLM-generated summary: The summary produced by the LLM.
- Reference summary: The summary to compare against.

ROUGE score ranges from 0 to 1. Higher scores indicate better coverage of the reference summary's content in the generated summary.

**Example Code Snippet**

```python
llm_generated_summary = [
    """Einstein's theory of relativity revolutionized physics by unifying space and time.
    It introduced the concept of spacetime and showed that massive objects can warp it.
    The theory also led to the famous equation E=mc², relating mass and energy."""
]

reference_summary = [
    """Einstein's theory of relativity transformed our understanding of the universe.
    It combined space and time into a single continuum called spacetime, which can be
    distorted by mass and energy. The theory's most famous outcome is the equation E=mc²,
    demonstrating the equivalence of mass and energy."""
]

# Calculate ROUGE Score
rouge_score = lm_eval_text.calculate_rouge1_score(
    llm_generated_summary,
    reference_summary
)

# Print results
display(pd.DataFrame({
    "LLM Generated Summary": llm_generated_summary,
    "Reference Summary": reference_summary,
    "ROUGE Score": rouge_score
}))
```

<img width="730" alt="Screen Shot 2024-07-05 at 5 10 21 PM" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/32052c1a-c904-49d6-917d-c49fbc44d3f2"/>

The ROUGE Score of 0.56 indicates moderate content overlap between the generated and reference summaries. Both capture key aspects of Einstein's theory of relativity, including the unification of space and time, spacetime concept, and the E=mc² equation. However, the score suggests some differences in coverage or phrasing. This demonstrates how ROUGE evaluates summary quality based on shared content, balancing similarities and variations in expression.

## Safety Evaluators

Safety Evaluators assess the appropriateness and potential harm of LLM-generated content.

### Toxicity

The Toxicity evaluator is a binary measure that assesses whether an LLM-generated response contains toxic content. It aims to identify harmful, offensive, or inappropriate elements in the generated text. The Toxicity Score answers: _"Does the LLM-generated response contain any form of toxic content?"_

Input:

- LLM-generated response: The text produced by the LLM to be evaluated for toxicity.

The Toxicity evaluator outputs a binary score where a score of 1 indicates the response contains toxic content, while a score of 0 means the response is free from toxicity.

**Example Code Snippet**

```python
llm_generated_responses = [
    "Some people don't like pineapple on pizza and that's okay.",
    "Anyone who puts pineapple on pizza is disgusting!"
]

# Calculate Toxicity Score
toxicity_scores = lm_eval_text.calculate_toxicity_score(
    llm_generated_responses,
    model_name="gpt-3.5-turbo"
)

# Print results
display(pd.DataFrame({
    "LLM Generated Response": llm_generated_responses,
    "Toxicity Score": toxicity_scores
}))
```

<img width="500" alt="Screen Shot 2024-07-05 at 4 35 53 PM" src="https://github.com/lastmile-ai/aiconfig/assets/81494782/c844abde-d75f-49f1-b1d5-bfd1e9b5cd88"/>

The Toxicity Scores accurately identify the presence of toxic content. The first response scores 0, expressing a personal preference respectfully. The second scores 1 due to its demeaning language. This demonstrates the evaluator's ability to distinguish between respectful and toxic expressions in everyday discussions.
