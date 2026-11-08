---
title: Golden record
description: What a golden record is and how Fita builds one from your source records.
---

A golden record is the single, trusted version of an entity, such as a customer or a supplier. Fita builds it from the source records that describe that entity in your other systems.

## Source records

A source record is one row about an entity in one system. The same customer can appear in your ERP, your CRM and your billing database, each time with slightly different data.

| System  | Name                      | Tax id    | City     |
| ------- | ------------------------- | --------- | -------- |
| ERP     | Talleres Ribera S.L.      | B00000000 | Valencia |
| CRM     | TALLERES RIBERA SL        |           | València |
| Billing | Talleres Ribera, Sociedad | B00000000 |          |

All three rows describe the same company. The data in this table is invented.

## From source records to a golden record

Fita reads the source records, normalizes them and finds the ones that describe the same entity. For each group it picks the best value for every attribute and stores the result as the golden record.

| Attribute | Value                | Source |
| --------- | -------------------- | ------ |
| Name      | Talleres Ribera S.L. | ERP    |
| Tax id    | B00000000            | ERP    |
| City      | Valencia             | ERP    |

## Every value has a source

Fita keeps the source of every value in the golden record. You can always see which system a value came from and why Fita chose it. Every automatic decision can be undone, and manual decisions in the review queue always win over the engine.
