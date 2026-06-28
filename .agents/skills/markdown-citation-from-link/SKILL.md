---
name: markdown-citation-from-link
description: Generates Chicago Manual of Style citations from a URL, with a focus on web news and article links, formatted to be a Markdown footnote.
---

# Markdown Citation From Link

## Purpose
Create accurate Chicago-style citations for web pages when the user provides a link.

## When to use
- User asks for a Chicago citation from a URL
- User asks for a Markdown footnote citation
- User wants Notes and Bibliography format
- User wants a source citation with author, title, site, date, and URL

## Inputs
- Required: URL

## Required metadata to extract
1. Author name (if present)
2. Article/page title
3. Site or publication name
4. Publication date (or last updated date if publication date is unavailable)
5. URL
6. Access date only if no publication date is available or user asks for it

## Citation rules (Chicago Notes and Bibliography)
1. Use headline-style capitalization for English titles.
2. Put article titles in quotation marks.
3. Italicize publication/site name when appropriate.
4. Format date as Month Day, Year.
5. End with URL.
6. If no author, start with title.
7. Do not duplicate publication name or year unnecessarily.
8. Keep punctuation Chicago-compliant:
   - Note format uses commas between major elements.
   - Bibliography format uses periods between major elements.

## Output formats

### Markdown footnote
[^key]: First Last, "Article Title," Publication Name, Month Day, Year, URL.

## Copy-friendly output requirements
- Always return citations inside a fenced Markdown code block using ```markdown.
- Put each citation on its own line.
- Do not add commentary inside the code block.
- If explanation is needed, place it outside the code block and keep it to one short sentence.
- For single-citation requests, return exactly one citation line in the code block.
- For multi-citation requests, return only citation lines in the code block.

## Workflow
1. Read the URL and extract metadata from the page.
2. Validate author, title, publication, and date.
3. If metadata is missing:
   - Use title-first when no author exists.
   - Use n.d. only if no reliable date is available.
4. Generate requested citation format.
5. If user did not specify format, return:
   - Full note
   - Bibliography
   - Markdown footnote

## Quality checks before returning
- Author spelling is correct
- Title exactly matches article headline
- Date is valid and properly formatted
- Publication name is correct
- URL is complete and clickable
- No duplicate site/year fragments
- Chicago punctuation is correct
- The final answer includes a fenced Markdown code block for easy copy

## Example output style

Markdown footnote:
```markdown
[^bbc2026]: Shiona McCallum, "AI will create more jobs for humans, not replace them, Amazon founder Bezos says," BBC News, June 17, 2026, https://www.bbc.com/news/articles/ceqdrw2yy3vo.
```


