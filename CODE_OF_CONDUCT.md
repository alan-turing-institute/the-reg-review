# Code of Conduct

## For All Contributors

Our team prioritizes bringing people along with us. We value:

- **Clarity over cleverness**: Write simple, readable code. If you don't quite understand how you got things working, it's likely others won't either.
- **Help others learn**: In reviews and discussions, focus on helping others improve their work. Ask questions, share knowledge, and explain your suggestions.
- **Equal respect**: Treat everyone with the same respect, regardless of their experience level. We all have something to learn and something to teach.
- **Benefit of the doubt**: Assume good intentions. If something is unclear, ask for clarification rather than making assumptions.

## Writing issues

If logging issues, please include:
* A concise description of the bug/feature you're highlighting.
* If a bug: a minimal-worked example that replicates the behaviour you'd like to see.
* If a feature: the design you anticipate this functionality having, and how you might start exploring that.
* Link to any other relevant issues.

If you'd like to use or contribute to issue templates that encourage this layout, this is welcome.

## Use of AI Tools

AI tools are welcome, but you are responsible for any code you commit. Never commit code you don't understand. If you use AI-generated code, ensure its correctness and be prepared to explain exactly what it does to others. You do not have to disclose if code was written by AI, but making it clear where and how you used AI may be useful for collaborators if AI was heavily used in your PR.

## For PR Submitters

See CONTRIBUTING.md for detailed technical guidance on creating PRs.

### Branch naming

Branch names must be informative to team members that see them. Ways to do this include:
* Prefix the branch name with the relevant issue, e.g. `242-shape-fixes`
* Say what you're trying to do in the branch, e.g. `move-to-x-framework`
* Avoiding branch names that feel temporary and lack description, such as `temp`, `patch`, `fix` -- no-one but you knows _what_ needs patching/fixing!

### Did you find a bug?

* Ensure the bug was not already reported by searching on GitHub under Issues.
* If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior that is not occurring.
* Be sure to add the complete error messages.

### Did you write a patch that fixes a bug?

* Open a new GitHub pull request with the patch.
* Ensure that your PR includes a test that fails without your patch, and passes with it.
* Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

### Are you adding a new feature?

* All feature PRs must include tests that verify the feature works as intended.
* Clearly document what the feature does and why it's useful.

### PR submission guidelines

* Keep each PR focused. While it's more convenient, do not combine several unrelated fixes together. Create as many branches as needed to keep each PR focused.
* Do not mix style changes/fixes with "functional" changes. It's very difficult to review such PRs and will most likely get rejected.
* Do not add/remove vertical whitespace. Preserve the original style of the file you edit as much as you can.
* Do not turn an already-submitted PR into your development playground -- if you're not ready for review, leave the PR in draft mode. If after you submit a PR as ready for review, you discover that more work is needed: close the PR, do the required work, and then submit a new PR that cleanly implements those changes. Otherwise, each of your commits requires attention from maintainers of the project.
* If, however, you submit a PR and receive a request for changes, you should proceed with commits inside that PR, so that the reviewer can see the incremental fixes and won't need to review the whole PR again. In the exception case where you realize it'll take many commits to complete the requests, then it's probably best to close the PR, do the work, and then submit it again. Use common sense where you'd choose one way over another.
* Only re-request review when you've fully addressed all comments. If you disagree with a suggestion, discuss it in the PR thread first rather than ignoring it.

## For Code Reviewers

Code review is an opportunity to help your teammates improve and to learn from their work. When reviewing:

### Technical responsibilities

* **Run the code**: Pull the PR and run the feature yourself. Verify it works as described and doesn't break existing functionality.
* **Check correctness**: Does the code actually solve the problem? Are there edge cases that aren't handled?
* **Look for inefficiencies**: Are there obvious performance issues or unnecessarily complex approaches?
* **Verify tests**: Do the tests actually test what they claim to? Do they fail without the changes and pass with them?

### How to give feedback

* **Be helpful, not impressive**: Focus on improving the code, not on showing off your knowledge.
* **Explain your suggestions**: Don't just say what's wrong—help the author understand why and how to improve it.
* **Ask questions**: "Why did you choose this approach?" can be more valuable than "This is wrong."
* **Prioritize feedback**: Distinguish between critical issues that must be fixed and suggestions for future improvement.
* **Request changes when needed**: Don't hesitate to formally request changes if you think they're necessary. Clear expectations help authors know what requires attention before the PR can be merged.

## Guidance & Enforcement

If you experience or witness actions that violate this code of conduct, this document serves as a reference to guide people in the right direction, and you're welcome to use it as a signpost in discussions. Examples of this could be a poorly conducted code review, a complex PR with sweeping changes that aren't documented in the code, repo, or issue, or generally things that don't conform to the standards presented here. Try to address this by being supportive in your conduct on the relevant part of the repository, and be clear in what way you feel like you would like to see differences, giving explicit examples where you can.

It may be that someone has violated the more human aspects of this code of conduct; we expect all team members to maintain a professional and respectful environment. If you feel that someone has behaved in an unacceptable manner and is not responding to feedback or you do not wish to confront them, please raise it with your line manager or project lead. If you prefer, you may also use your organization's anonymous reporting channels if available.

Examples of unacceptable behavior include:

* Harassment, intimidation, or discrimination of any kind
* Offensive comments related to personal characteristics or background
* Deliberate intimidation or unwelcome attention
* Sustained disruption of discussions or work
* Publishing others' private information without permission
* Other forms of inappropriate conduct in a professional environment

*If you feel like someone has violated this code of conduct, it's likely they have — at a minimum, a conversation needs to be had that addresses your issue. Do not feel like your concern needs to perfectly fit the examples given for this to take place.*


---

This CODE_OF_CONDUCT includes adapted material from codes of conduct in the [FastHTML](https://github.com/AnswerDotAI/fasthtml/blob/main/CODE_OF_CONDUCT.md) and [DeepSensor](https://github.com/alan-turing-institute/deepsensor/blob/main/CODE_OF_CONDUCT.md) repositories.
