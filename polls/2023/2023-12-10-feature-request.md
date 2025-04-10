---
title: Feature Request Poll - December 10, 2023
summary: Signal your support or opposition to implementing a new feature that would add automated market maker (AMM) functionality to the Sky Protocol's decentralized exchange.
discussion_link: https://forum.sky.money/t/feature-request-automated-market-maker-implementation/24981
parameters:
  input_format:
    type: single-choice
    abstain: [0]
  victory_conditions:
    - {
        type: 'and',
        conditions:
          [
            { type: plurality },
            { type: comparison, comparator: '>=', value: 15000 },
          ],
      }
    - { type: default, value: 2 }
  result_display: single-vote-breakdown
version: v2.0.0
options:
  0: Abstain
  1: Yes
  2: No
start_date: 2023-12-10T16:00:00
end_date: 2023-12-13T16:00:00
---

# Feature Request Poll - December 10, 2023

The Governance Facilitators have placed a Feature Request Poll into the [voting system](https://vote.makerdao.com/polling) as requested by the Sky Protocol Development Team. This Governance [Poll](https://forum.sky.money/t/feature-request-automated-market-maker-implementation/24981) will be active for three days beginning on Sunday, December 10 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following feature request:

- Implementation of an Automated Market Maker (AMM) functionality in the Sky Protocol DEX
- [Feature Request Discussion Thread](https://forum.sky.money/t/feature-request-automated-market-maker-implementation/24981)

The proposed feature includes:

- Integration of a constant product AMM formula
- Support for multiple token pair pools
- Dynamic fee adjustment mechanism
- Liquidity provider incentive structure

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Feature Request Polls is currently set to **15,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 15,000 MKR, then the following actions will be taken:**

- The Development Team will begin implementation of the AMM feature
- Regular progress updates will be provided in the Development Updates section of the forum

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
