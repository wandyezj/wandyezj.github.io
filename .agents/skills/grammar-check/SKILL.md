---
name: grammar-check
description: Check prose for grammar, spelling, punctuation, agreement, and word-choice mistakes, then return a concise list of issues with line references and suggested fixes.
---

# Grammar Check

Use this skill when the user asks for a grammar review, proofreading, or a pass focused on mechanics rather than style.

## Goals

- Find grammatical errors, spelling mistakes, punctuation problems, subject-verb agreement issues, article usage errors, tense inconsistencies, and awkward constructions that are clearly incorrect.
- Prefer concrete corrections over broad commentary.
- Keep style suggestions separate unless the user explicitly asks for style or readability feedback.
- If the text is already correct, say so briefly and note any minor ambiguities only if they are likely to cause confusion.

## Output Format

Return results as a short, structured list.

For each issue, include:
- A markdown link to the line in the file (format: `[Line N](relative/path/to/file.md#LN)`)
- The original phrase
- A suggested correction
- A brief reason when helpful

Example:

- [Line 12](docs/_posts/2026-06-28-example.md#L12): "its a good idea" -> "it's a good idea"
  - Missing apostrophe in "it's".

## Review Rules

- Focus on grammar first, not tone or voice.
- Do not rewrite the whole document unless the user asks for a full revision.
- Avoid overcorrecting idioms, intentional fragments, or stylistic choices unless they create a clear grammar problem.
- Preserve the author's meaning.
- When multiple fixes are possible, suggest the simplest correct one.

## Checklist

Look for:
- Missing or extra articles
- Subject-verb disagreement
- Pronoun reference problems
- Misused apostrophes
- Run-on sentences and fragments
- Incorrect prepositions
- Incorrect verb tense or aspect
- Misplaced modifiers
- Faulty parallelism
- Common spelling mistakes
- Common word-choice errors such as "effect" versus "affect"

## Response Tone

- Direct
- Concise
- Specific
- Helpful without being verbose