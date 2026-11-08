---
title: Golden record
description: Qué es un golden record y cómo lo construye Fita a partir de tus source records.
---

Un golden record es la versión única y fiable de una entidad, como un cliente o un proveedor. Fita lo construye a partir de los source records que describen esa entidad en tus otros sistemas.

## Source records

Un source record es una fila sobre una entidad en un sistema. El mismo cliente puede aparecer en tu ERP, tu CRM y tu base de datos de facturación, cada vez con datos un poco distintos.

| Sistema     | Nombre                    | NIF       | Ciudad   |
| ----------- | ------------------------- | --------- | -------- |
| ERP         | Talleres Ribera S.L.      | B00000000 | Valencia |
| CRM         | TALLERES RIBERA SL        |           | València |
| Facturación | Talleres Ribera, Sociedad | B00000000 |          |

Las tres filas describen la misma empresa. Los datos de esta tabla son inventados.

## De source records a golden record

Fita lee los source records, los normaliza y encuentra los que describen la misma entidad. Para cada grupo elige el mejor valor de cada attribute y guarda el resultado como golden record.

| Attribute | Valor                | Origen |
| --------- | -------------------- | ------ |
| Nombre    | Talleres Ribera S.L. | ERP    |
| NIF       | B00000000            | ERP    |
| Ciudad    | Valencia             | ERP    |

## Cada valor tiene un origen

Fita guarda el origen de cada valor del golden record. Siempre puedes ver de qué sistema salió un valor y por qué Fita lo eligió. Cualquier decisión automática se puede deshacer, y las decisiones manuales en la review queue siempre ganan al motor.
