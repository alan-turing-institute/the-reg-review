# General Guidelines

This document contains general guidelines and useful references related to the review process.

We're still in the early stages of the process, trying to figure out how this should (could) work.
This is a live document and we should expect it to be updated as time goes on.

## What is a code review?

TBC

## What is a cross-project code review?

TBC
## Why does this exist?

Due to the nature of REG, we don't always get to directly help each other when writing code. This is an idea to make that a little better: giving an opportunity for your colleagues to look through code you've written, and suggest changes where required. As well as giving us all practice being part of code review, you get to show everyone the awesome work you've been doing, which we all want to see!

## Who is this for?

People in REG that want to
- practice going through the process of code review, both as a reviewee and reviewer
- get suggestions on their work when they are unsure how to proceed
  - at the same time, we will all learn a lot about new frameworks, languages and ideas we've never seen in our main projects!
- build a catalogue of code examples we can look back on when thinking about best practices

## The process

There's no strict process that reviewers and reviewees are required to go through: this is supposed to be flexible and allow developers to choose the approach that best suits them and their project.
Nevertheless it may be helpful to have some understanding about how we've done this in the past, what worked and what didn't.

Please try to avoid making this section prescriptive.

The high-level approach we've used up until now has been.

1. Create a new branch in this [`the-reg-review`](https://github.com/alan-turing-institute/the-reg-review) repository or in a personal fork of it.
2. Add a new subdirectory `<date>-<name>` to the working tree for this new branch and add all of the code to be reviewed to it.
3. Commit these changes to your local repository and push them to origin.
4. Create a Pull Request from the new branch to `main` in the upstream repo (which will either be the same repo, or the repo you forked from).
5. Add clear instructions about how to run the code and what the reviewee would like the reviewers to focus on in the pull request description.
6. Create a second pull request to update the `main` branch with the details of the review.
7. Reviewers are given period of time to review the code (one or two weeks).
8. Refiewers add comments to the Pull Request using the standard GitHub tooling.
9. At the end of the two weeks the reviewee can respond to the comments, update the code and submit it for re-review.
10. Steps 5-7 are repeated at the discretion of the reviewee.
11. The reviewee chooses when to merge any changes.
12. The review process is completed once the Pull Request has been merged.

In this arrangement the reviewee retains ultimate control to merge, or not merge, the changes as they see fit.
In particular, because the review and merging is happening in a repository separate from the actual project repository, there is no requirement for them to ultimately make use of any of the changes.

Step 5 is needed because the `main` branch is protected.
Note that a linear history is also enforced by GitHub, so any changes will need to be rebased before merging.
This is just to help separate out the different reviews and ensure everything is kept clean.

## Useful resources

Some useful resources that may be helpful to read before embarking on a review.

1. The original [Cross-project Code Review proposal](https://github.com/alan-turing-institute/Hut23/issues/1736).
2. Eric's [Peer Repo Audio proposal](https://github.com/alan-turing-institute/Hut23/issues/925) from a few years back.
2. [Code Review Stack Exchange](https://codereview.stackexchange.com/).
3. [Google's Code Review Guidelines](https://google.github.io/eng-practices/review/reviewer/standard.html).
4. [Google's Python Style Guide](https://google.github.io/styleguide/pyguide.html); just provided as an example.
5. Edward R. Ivimey‐Cook, *et al.*, ["Implementing code review in the scientific workflow: Insights from ecology and evolutionary biology,"](https://doi.org/10.1111/jeb.14230) Journal of Evolutionary Biology, Volume 36, Issue 10, 1 October 2023, Pages 1347–1356.
6. Carol S Lee, Catherine M Hicks, ["Understanding and effectively mitigating code review anxiety,"](https://doi.org/10.1007/s10664-024-10550-9) Empir Software Eng 29, 161 (2024). 
7. The Turing Way, ["Code Reviewing Process"](https://book.the-turing-way.org/reproducible-research/reviewing) section in the Guide for Reproducible Research.
8. The Turing Way, ["Guidelines for Code Review"](https://book.the-turing-way.org/communication/peer-review/peer-review-code) section in the Guide for Communication.

